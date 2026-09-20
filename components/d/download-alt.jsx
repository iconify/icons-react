import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaag06b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaag06b8z"/>`,
		"fallback": "uis:download-alt",
	});
}

export default Component;

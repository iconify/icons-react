import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofcnx_x9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofcnx_x9u"/>`,
		"fallback": "ci:file-blank",
	});
}

export default Component;

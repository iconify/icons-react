import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f97e20-gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f97e20-gm"/>`,
		"fallback": "mdi:file-pdf-box-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hz5z9dbox.css';
import '../../css/c/clcfyob1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="hz5z9dbox"/><path class="clcfyob1e"/></g>`,
		"fallback": "lets-icons:folder-line-light",
	});
}

export default Component;

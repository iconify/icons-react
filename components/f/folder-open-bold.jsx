import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fi5c2bbqf.css';
import '../../css/r/ros41ubey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fi5c2bbqf"/><path clip-rule="evenodd" class="ros41ubey"/></g>`,
		"fallback": "solar:folder-open-bold",
	});
}

export default Component;

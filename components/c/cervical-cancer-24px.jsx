import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g00zukb8v.css';
import '../../css/s/s7buzeold.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g00zukb8v"/><path clip-rule="evenodd" class="s7buzeold"/></g>`,
		"fallback": "healthicons:cervical-cancer-24px",
	});
}

export default Component;

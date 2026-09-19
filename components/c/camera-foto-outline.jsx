import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wm4p_6bwr.css';
import '../../css/k/ktu665dou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wm4p_6bwr"/><path class="ktu665dou"/></g>`,
		"fallback": "flowbite:camera-foto-outline",
	});
}

export default Component;

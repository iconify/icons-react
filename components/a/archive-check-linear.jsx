import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hu30fdbrj.css';
import '../../css/w/wz6jt76ak.css';
import '../../css/q/q4xke4y0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hu30fdbrj"/><path class="wz6jt76ak"/><path class="q4xke4y0d"/></g>`,
		"fallback": "solar:archive-check-linear",
	});
}

export default Component;

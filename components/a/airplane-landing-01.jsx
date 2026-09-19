import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orsftacqd.css';
import '../../css/q/q1dykjbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="orsftacqd"/><path class="q1dykjbfk"/></g>`,
		"fallback": "hugeicons:airplane-landing-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7b4fo5xh.css';
import '../../css/y/ya4v2ogmm.css';
import '../../css/h/hzret1bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><ellipse class="k7b4fo5xh"/><path class="ya4v2ogmm"/><path class="hzret1bgp"/></g>`,
		"fallback": "solar:golf-linear",
	});
}

export default Component;

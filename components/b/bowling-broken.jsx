import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hhov-gbog.css';
import '../../css/d/dcgw77bis.css';
import '../../css/s/soqsp2xkn.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(-90 12 7)" class="hhov-gbog"/><circle transform="rotate(-90 12 12)" class="dcgw77bis"/><path class="soqsp2xkn"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:bowling-broken",
	});
}

export default Component;

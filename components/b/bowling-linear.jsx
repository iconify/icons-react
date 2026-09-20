import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/h/hhov-gbog.css';
import '../../css/d/dcgw77bis.css';
import '../../css/s/soqsp2xkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle transform="rotate(-90 12 7)" class="hhov-gbog"/><circle transform="rotate(-90 12 12)" class="dcgw77bis"/><path class="soqsp2xkn"/></g>`,
		"fallback": "solar:bowling-linear",
	});
}

export default Component;

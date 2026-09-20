import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/plmy2zvgw.css';
import '../../css/s/s5eh35bzd.css';
import '../../css/h/hixqu8e0n.css';
import '../../css/m/mioco9dwm.css';
import '../../css/g/g4enlftii.css';
import '../../css/y/ymq-tib4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="plmy2zvgw"/><path class="s5eh35bzd"/><path class="hixqu8e0n"/><path class="mioco9dwm"/><path class="g4enlftii"/><path class="ymq-tib4j"/></g>`,
		"fallback": "solar:bluetooth-wave-linear",
	});
}

export default Component;

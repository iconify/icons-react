import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2_uhcczz.css';
import '../../css/v/vg640qbkh.css';
import '../../css/t/te1q42bfr.css';
import '../../css/q/q9o-nccri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2_uhcczz"/><path class="vg640qbkh"/><path class="te1q42bfr"/><path class="q9o-nccri"/>`,
		"fallback": "energy-icons:hydrogen-bus-20-bold",
	});
}

export default Component;

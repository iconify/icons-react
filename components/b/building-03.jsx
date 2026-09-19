import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aux13abuw.css';
import '../../css/m/mcepihbux.css';
import '../../css/a/a3wbrcc6h.css';
import '../../css/s/sjowjbelj.css';
import '../../css/q/q7qsoobgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aux13abuw"/><path class="mcepihbux"/><path class="a3wbrcc6h"/><path class="sjowjbelj"/><path class="q7qsoobgp"/></g>`,
		"fallback": "hugeicons:building-03",
	});
}

export default Component;

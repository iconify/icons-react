import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jl7qy2b6n.css';
import '../../css/y/y31lx-nom.css';
import '../../css/f/frhepll3l.css';
import '../../css/m/m07rxpscr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jl7qy2b6n"/><path class="y31lx-nom"/><path class="frhepll3l"/><path class="m07rxpscr"/></g>`,
		"fallback": "hugeicons:building-02",
	});
}

export default Component;

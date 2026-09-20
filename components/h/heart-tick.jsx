import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ket9b_brq.css';
import '../../css/i/irpq6_opq.css';
import '../../css/n/nu1vehbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ket9b_brq"/><path class="irpq6_opq"/><path class="nu1vehbrk"/></g>`,
		"fallback": "reicon:heart-tick",
	});
}

export default Component;

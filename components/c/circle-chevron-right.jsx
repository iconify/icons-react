import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/k/kpy9ayipq.css';
import '../../css/c/czjh7btnl.css';
import '../../css/c/cznclccod.css';
import '../../css/r/rze47ib2l.css';
import '../../css/t/tdzg26ped.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="kpy9ayipq"/><path class="czjh7btnl"/><path class="cznclccod"/><path class="rze47ib2l"/><path class="tdzg26ped"/></g>`,
		"fallback": "withicons-retro:circle-chevron-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/gm4w5e9xe.css';
import '../../css/i/ipkkuws8y.css';
import '../../css/l/lsxdp91bz.css';
import '../../css/r/rze47ib2l.css';
import '../../css/b/bvdy6w5ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="gm4w5e9xe"/><path class="ipkkuws8y"/><path class="lsxdp91bz"/><path class="rze47ib2l"/><path class="bvdy6w5ot"/></g>`,
		"fallback": "withicons-retro:check-circle",
	});
}

export default Component;

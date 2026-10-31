import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/l/l70q0jn0v.css';
import '../../css/c/ct2rmqbcq.css';
import '../../css/g/g8ks0d4rl.css';
import '../../css/i/itcn8tuym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbKbg3c5x" x1="9" x2="15" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbKbg3c5x)" class="l70q0jn0v"/><path class="ct2rmqbcq wm-shine"/><path class="g8ks0d4rl wm-shine"/><path class="itcn8tuym wm-shine"/></g>`,
		"fallback": "withicons-utsav:armchair",
	});
}

export default Component;

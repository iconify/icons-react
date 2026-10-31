import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/f/fekdtq-0p.css';
import '../../css/w/wf-z76efr.css';
import '../../css/t/t86h8p9eb.css';
import '../../css/x/x9x2k2-hi.css';
import '../../css/b/bbu5ribyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="fekdtq-0p"/><path class="wf-z76efr"/><path class="t86h8p9eb"/><path class="x9x2k2-hi"/><path class="bbu5ribyu"/></g>`,
		"fallback": "withicons-retro:circle-arrow-up",
	});
}

export default Component;

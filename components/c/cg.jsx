import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spo03jb3p.css';
import '../../css/q/qa54txbpk.css';
import '../../css/z/z-jc08m3r.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spo03jb3p"/><path class="qa54txbpk"/><path class="z-jc08m3r"/></g>`,
		"fallback": "cif:cg",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/q/qhyf9kb5g.css';
import '../../css/s/suktsu29n.css';
import '../../css/i/ido7ll9ev.css';
import '../../css/i/i8uex-bic.css';
import '../../css/x/x_a37lbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="qhyf9kb5g"/><path class="suktsu29n"/><path class="ido7ll9ev"/><path class="i8uex-bic"/><path class="x_a37lbpu"/></g>`,
		"fallback": "withicons-retro:circle-play",
	});
}

export default Component;

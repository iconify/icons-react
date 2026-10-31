import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/x/xz6m7db3m.css';
import '../../css/i/idqnadczu.css';
import '../../css/r/rknwt2bpl.css';
import '../../css/k/k4ef5cbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="xz6m7db3m"/><path class="idqnadczu"/><path class="rknwt2bpl"/><path class="k4ef5cbtn"/></g>`,
		"fallback": "withicons-retro:football",
	});
}

export default Component;

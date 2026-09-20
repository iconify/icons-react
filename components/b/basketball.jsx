import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-c8a2bra.css';
import '../../css/z/zbfz6_e-q.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/y1j8wi2gc.css';
import '../../css/c/cz-zmg-cw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="z-c8a2bra"/><path class="zbfz6_e-q"/><g class="ij2x_72vy"><path class="y1j8wi2gc"/><circle class="cz-zmg-cw"/></g>`,
		"fallback": "openmoji:basketball",
	});
}

export default Component;

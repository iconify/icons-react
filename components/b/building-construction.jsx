import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntn9ylbrl.css';
import '../../css/m/miv4-bcbx.css';
import '../../css/o/o2csfrbvu.css';
import '../../css/p/p-ubr2bsg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b3pprxvra.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGViNcEejP" class="ntn9ylbrl"/></defs><path class="miv4-bcbx"/><path class="o2csfrbvu"/><path class="p-ubr2bsg"/><g class="ij2x_72vy"><use href="#SVGViNcEejP"/><path class="b3pprxvra"/><use href="#SVGViNcEejP"/></g>`,
		"fallback": "openmoji:building-construction",
	});
}

export default Component;

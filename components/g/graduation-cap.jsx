import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg184bcpv.css';
import '../../css/r/r9rgp0bkm.css';
import '../../css/q/q3g1lo8nq.css';
import '../../css/z/z38m9tbcu.css';
import '../../css/t/tfe3h44tv.css';
import '../../css/j/j2trrx4vd.css';
import '../../css/n/nwhmzmbzp.css';
import '../../css/h/ho-zhp79h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg184bcpv"/><path class="r9rgp0bkm"/><circle class="q3g1lo8nq"/><path class="z38m9tbcu"/><path class="tfe3h44tv"/><circle class="j2trrx4vd"/><path class="nwhmzmbzp"/><path class="ho-zhp79h"/>`,
		"fallback": "openmoji:graduation-cap",
	});
}

export default Component;

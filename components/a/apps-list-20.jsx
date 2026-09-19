import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flo95ub0v.css';
import '../../css/a/a7j4trpos.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/f/fr236kbdl.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/s/se36adcuq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGEiaQwbmC)" clip-rule="evenodd" class="flo95ub0v"/><path fill="url(#SVGwzArXdHa)" class="a7j4trpos"/><defs><linearGradient id="SVGEiaQwbmC" x1="6.5" x2="17" y1="1" y2="17" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="fr236kbdl"/></linearGradient><linearGradient id="SVGwzArXdHa" x1="2.951" x2="4.99" y1="4.127" y2="17.147" gradientUnits="userSpaceOnUse"><stop offset=".125" class="bxegrmbjp"/><stop offset="1" class="se36adcuq"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:apps-list-20",
	});
}

export default Component;

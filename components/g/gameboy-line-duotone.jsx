import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnt97vblj.css';
import '../../css/j/j3gq6tqze.css';
import '../../css/b/bnyimgbtl.css';
import '../../css/h/hnn_j_b_b.css';
import '../../css/m/m9-ftrbby.css';
import '../../css/g/g6ca7qbjp.css';
import '../../css/c/cbckit-9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnt97vblj"/><path class="j3gq6tqze"/><path class="bnyimgbtl"/><path class="hnn_j_b_b"/><path class="m9-ftrbby"/><path class="g6ca7qbjp"/><path class="cbckit-9u"/></g>`,
		"fallback": "solar:gameboy-line-duotone",
	});
}

export default Component;

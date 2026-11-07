import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aymhwhb8v.css';
import '../../css/e/er5hmdbdf.css';
import '../../css/t/t2g6m4h7c.css';
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
		"content": `<g class="ipq1z-bjh"><path class="aymhwhb8v"/><path class="er5hmdbdf"/><path class="t2g6m4h7c"/><path class="hnn_j_b_b"/><path class="m9-ftrbby"/><path class="g6ca7qbjp"/><path class="cbckit-9u"/></g>`,
		"fallback": "solar:gameboy-line-duotone",
	});
}

export default Component;

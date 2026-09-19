import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tf8ifcbgn.css';
import '../../css/n/njlya3b2h.css';
import '../../css/h/haunucdsf.css';
import '../../css/z/znez6bula.css';
import '../../css/j/jpsikcchz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tf8ifcbgn"/><path class="njlya3b2h"/><path class="haunucdsf"/><path class="znez6bula"/><path class="jpsikcchz"/></g>`,
		"fallback": "hugeicons:hospital-01",
	});
}

export default Component;

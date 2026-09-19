import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tr7sirbvc.css';
import '../../css/e/ej5a_l4in.css';
import '../../css/k/kgtb4abpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tr7sirbvc"/><path class="ej5a_l4in"/><path class="kgtb4abpq"/></g>`,
		"fallback": "hugeicons:hat-glasses",
	});
}

export default Component;

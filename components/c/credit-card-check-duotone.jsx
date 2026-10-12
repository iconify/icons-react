import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxmimtf1y.css';
import '../../css/j/joz_vvjya.css';
import '../../css/y/ykb_6ib2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wxmimtf1y"/><path class="joz_vvjya"/><path class="ykb_6ib2c"/></g>`,
		"fallback": "lucide-extended:credit-card-check-duotone",
	});
}

export default Component;

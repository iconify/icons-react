import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yq5tzwbme.css';
import '../../css/e/eak43rb5w.css';
import '../../css/g/g16nbcc0i.css';
import '../../css/d/ds4eep50x.css';
import '../../css/e/e92whkbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yq5tzwbme"/><path class="eak43rb5w"/><path class="g16nbcc0i"/><path class="ds4eep50x"/><path class="e92whkbjm"/></g>`,
		"fallback": "solar:car-battery-line-duotone",
	});
}

export default Component;

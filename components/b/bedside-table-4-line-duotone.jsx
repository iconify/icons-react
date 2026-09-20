import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/d/d8ir8h8wj.css';
import '../../css/l/l13ee7boy.css';
import '../../css/i/ix2yyfqqg.css';
import '../../css/d/d-s8-1z2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="d8ir8h8wj"/><path class="l13ee7boy"/><path class="ix2yyfqqg"/><path class="d-s8-1z2x"/></g>`,
		"fallback": "solar:bedside-table-4-line-duotone",
	});
}

export default Component;

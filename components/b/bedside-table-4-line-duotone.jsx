import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/d/d8ir8h8wj.css';
import '../../css/l/l13ee7boy.css';
import '../../css/n/nym5net5m.css';
import '../../css/r/r4w9h_2-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="d8ir8h8wj"/><path class="l13ee7boy"/><path class="nym5net5m"/><path class="r4w9h_2-n"/></g>`,
		"fallback": "solar:bedside-table-4-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ovw1pubnt.css';
import '../../css/n/na80fjbih.css';
import '../../css/y/ywpq_rvvt.css';
import '../../css/p/p6o9-vebo.css';
import '../../css/q/q7kvgacmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ovw1pubnt"/><path class="na80fjbih"/><path class="ywpq_rvvt"/><path class="p6o9-vebo"/><path class="q7kvgacmn"/></g>`,
		"fallback": "solar:battery-full-line-duotone",
	});
}

export default Component;

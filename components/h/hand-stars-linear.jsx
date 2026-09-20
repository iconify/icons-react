import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xwggvq01q.css';
import '../../css/z/zkkdtubov.css';
import '../../css/t/twucrwbct.css';
import '../../css/u/utnhp4bhf.css';
import '../../css/l/lqpy27syi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xwggvq01q"/><path class="zkkdtubov"/><path class="twucrwbct"/><path class="utnhp4bhf"/><rect class="lqpy27syi"/></g>`,
		"fallback": "solar:hand-stars-linear",
	});
}

export default Component;

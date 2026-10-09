import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybysmhbdr.css';
import '../../css/u/un3d4_cir.css';
import '../../css/z/z2j4_3b3x.css';
import '../../css/i/iyzh_ybqf.css';
import '../../css/h/hw-gycbzb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybysmhbdr"/><path class="un3d4_cir"/><path class="z2j4_3b3x"/><path class="iyzh_ybqf"/><path class="hw-gycbzb"/>`,
		"fallback": "energy-icons:chart-radar-20-bold",
	});
}

export default Component;

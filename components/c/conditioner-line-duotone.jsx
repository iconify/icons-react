import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mm_litbye.css';
import '../../css/l/l68gd2b_u.css';
import '../../css/u/utklsfbvf.css';
import '../../css/p/piipinbcz.css';
import '../../css/k/kkehyzd5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mm_litbye"/><path class="l68gd2b_u"/><path class="utklsfbvf"/><path class="piipinbcz"/><path class="kkehyzd5g"/></g>`,
		"fallback": "solar:conditioner-line-duotone",
	});
}

export default Component;

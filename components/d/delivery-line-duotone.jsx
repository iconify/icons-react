import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v1r-x4bqc.css';
import '../../css/s/sf-_-cccz.css';
import '../../css/n/n7e8zdwmr.css';
import '../../css/s/ssy2ybbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v1r-x4bqc"/><path class="sf-_-cccz"/><circle class="n7e8zdwmr"/><path class="ssy2ybbtv"/></g>`,
		"fallback": "solar:delivery-line-duotone",
	});
}

export default Component;

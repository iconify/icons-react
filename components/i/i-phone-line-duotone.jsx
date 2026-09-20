import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wxrlmccjj.css';
import '../../css/l/l0yi6obcv.css';
import '../../css/u/ueycgzb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wxrlmccjj"/><path class="l0yi6obcv"/><path class="ueycgzb_a"/></g>`,
		"fallback": "solar:i-phone-line-duotone",
	});
}

export default Component;

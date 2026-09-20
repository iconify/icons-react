import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yubjjdbth.css';
import '../../css/c/c7zikwrvh.css';
import '../../css/x/xzg6x68cp.css';
import '../../css/x/xc_fo9bdv.css';
import '../../css/f/f26ggybga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yubjjdbth"/><path class="c7zikwrvh"/><path class="xzg6x68cp"/><path class="xc_fo9bdv"/><path class="f26ggybga"/></g>`,
		"fallback": "solar:fridge-broken",
	});
}

export default Component;

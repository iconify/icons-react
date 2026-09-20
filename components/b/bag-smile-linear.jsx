import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bomz11bhc.css';
import '../../css/z/z7w8u-bgf.css';
import '../../css/h/hkf_44bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bomz11bhc"/><path class="z7w8u-bgf"/><path class="hkf_44bqq"/></g>`,
		"fallback": "solar:bag-smile-linear",
	});
}

export default Component;

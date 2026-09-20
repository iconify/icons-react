import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yigrcjbsp.css';
import '../../css/g/gskbbgyxb.css';
import '../../css/z/z7w8u-bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yigrcjbsp"/><path class="gskbbgyxb"/><path class="z7w8u-bgf"/></g>`,
		"fallback": "solar:bag-smile-line-duotone",
	});
}

export default Component;

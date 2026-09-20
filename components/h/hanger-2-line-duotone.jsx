import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zn9i8pw1k.css';
import '../../css/w/wd6x7uwrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zn9i8pw1k"/><path class="wd6x7uwrd"/></g>`,
		"fallback": "solar:hanger-2-line-duotone",
	});
}

export default Component;

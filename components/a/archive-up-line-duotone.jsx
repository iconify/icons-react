import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bn340ib1t.css';
import '../../css/o/ohl_stbmh.css';
import '../../css/w/wz6jt76ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bn340ib1t"/><path class="ohl_stbmh"/><path class="wz6jt76ak"/></g>`,
		"fallback": "solar:archive-up-line-duotone",
	});
}

export default Component;

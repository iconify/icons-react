import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohl_stbmh.css';
import '../../css/w/wz6jt76ak.css';
import '../../css/t/t6qgw5b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ohl_stbmh"/><path class="wz6jt76ak"/><path class="t6qgw5b9f"/></g>`,
		"fallback": "solar:archive-close-line-duotone",
	});
}

export default Component;

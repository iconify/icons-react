import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/y/yaa3skbyc.css';
import '../../css/k/kgb3mbbsa.css';
import '../../css/t/ta4khdrwc.css';
import '../../css/z/zgyerrblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="yaa3skbyc"/><path class="kgb3mbbsa"/><path class="ta4khdrwc"/><path class="zgyerrblx"/></g>`,
		"fallback": "solar:black-hole-2-linear",
	});
}

export default Component;

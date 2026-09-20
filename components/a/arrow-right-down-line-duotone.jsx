import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zowiwwbmr.css';
import '../../css/z/zyly0dhik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zowiwwbmr"/><path class="zyly0dhik"/></g>`,
		"fallback": "solar:arrow-right-down-line-duotone",
	});
}

export default Component;

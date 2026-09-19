import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ne1bocb1e.css';
import '../../css/t/t66mjmboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ne1bocb1e"/><path class="t66mjmboe"/></g>`,
		"fallback": "hugeicons:file-exclamation-point",
	});
}

export default Component;

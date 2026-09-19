import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k2k2y1bli.css';
import '../../css/z/zja31dbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k2k2y1bli"/><path class="zja31dbji"/></g>`,
		"fallback": "hugeicons:book-check",
	});
}

export default Component;

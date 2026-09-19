import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r8sbv39ff.css';
import '../../css/w/wb_7e27cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r8sbv39ff"/><path class="wb_7e27cu"/></g>`,
		"fallback": "hugeicons:blocked",
	});
}

export default Component;

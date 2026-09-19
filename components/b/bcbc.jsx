import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjw704bee.css';
import '../../css/y/yg0hk-baq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yjw704bee"/><path class="yg0hk-baq"/></g>`,
		"fallback": "cryptocurrency-color:bcbc",
	});
}

export default Component;

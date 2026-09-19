import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ubzrr3byh.css';
import '../../css/t/tgiwabbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ubzrr3byh"/><path class="tgiwabbpx"/></g>`,
		"fallback": "hugeicons:cursor-magic-selection-02",
	});
}

export default Component;

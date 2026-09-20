import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ccoks1myo.css';
import '../../css/d/d9bw24w9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ccoks1myo"/><path class="d9bw24w9w"/></g>`,
		"fallback": "solar:alt-arrow-down-line-duotone",
	});
}

export default Component;

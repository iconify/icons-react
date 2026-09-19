import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y45nggumb.css';
import '../../css/r/r1dcocbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y45nggumb"/><path class="r1dcocbrb"/></g>`,
		"fallback": "hugeicons:arrow-move-right-down",
	});
}

export default Component;

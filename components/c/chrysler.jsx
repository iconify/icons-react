import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fzvp0ibac.css';
import '../../css/q/qpzakybpx.css';
import '../../css/p/p01jvacul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fzvp0ibac"/><path class="qpzakybpx"/><path class="p01jvacul"/></g>`,
		"fallback": "hugeicons:chrysler",
	});
}

export default Component;

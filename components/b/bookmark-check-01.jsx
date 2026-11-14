import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dmhppkbej.css';
import '../../css/l/l4c0j82eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dmhppkbej"/><path class="l4c0j82eg"/></g>`,
		"fallback": "hugeicons:bookmark-check-01",
	});
}

export default Component;

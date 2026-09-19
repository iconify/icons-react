import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ion377t6d.css';
import '../../css/v/vn6-di86m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ion377t6d"/><path class="vn6-di86m"/></g>`,
		"fallback": "hugeicons:bookmark-01",
	});
}

export default Component;

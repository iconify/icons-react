import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/husatjbjt.css';
import '../../css/w/w8mw4p1vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="husatjbjt"/><path class="w8mw4p1vn"/></g>`,
		"fallback": "hugeicons:checkmark-badge-02",
	});
}

export default Component;

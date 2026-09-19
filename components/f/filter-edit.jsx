import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/ms9j0qb_b.css';
import '../../css/b/bv198sb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ms9j0qb_b"/><path class="bv198sb1q"/></g>`,
		"fallback": "hugeicons:filter-edit",
	});
}

export default Component;

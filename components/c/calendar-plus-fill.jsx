import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnl2hdblz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnl2hdblz"/>`,
		"fallback": "bi:calendar-plus-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnvuc1b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnvuc1b_h"/>`,
		"fallback": "hugeicons:calendar-check2",
	});
}

export default Component;

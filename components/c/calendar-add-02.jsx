import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbm-gwbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbm-gwbgh"/>`,
		"fallback": "hugeicons:calendar-add-02",
	});
}

export default Component;

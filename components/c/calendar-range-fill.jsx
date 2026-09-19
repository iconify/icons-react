import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abeen-81d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abeen-81d"/>`,
		"fallback": "bi:calendar-range-fill",
	});
}

export default Component;

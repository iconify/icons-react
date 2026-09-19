import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glq9k8b1d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glq9k8b1d"/>`,
		"fallback": "bi:calendar-day-fill",
	});
}

export default Component;

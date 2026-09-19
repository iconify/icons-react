import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_v23dcth.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_v23dcth"/>`,
		"fallback": "bi:calendar-event-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3r0drnxu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3r0drnxu"/>`,
		"fallback": "bi:calendar3-event-fill",
	});
}

export default Component;

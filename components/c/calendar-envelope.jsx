import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijvvyibbs.css';
import '../../css/n/n_v2xfr4l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijvvyibbs"/><path class="n_v2xfr4l"/>`,
		"fallback": "vaadin:calendar-envelope",
	});
}

export default Component;

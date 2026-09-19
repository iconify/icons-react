import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu36i1b1y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu36i1b1y"/>`,
		"fallback": "fluent-mdl2:calendar-day",
	});
}

export default Component;

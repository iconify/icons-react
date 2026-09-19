import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q92flnbmu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q92flnbmu"/>`,
		"fallback": "fa7-solid:calendar-minus",
	});
}

export default Component;

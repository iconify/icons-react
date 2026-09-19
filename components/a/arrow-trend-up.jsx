import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj5x8lblr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj5x8lblr"/>`,
		"fallback": "fa7-solid:arrow-trend-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwmeq3btb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwmeq3btb"/>`,
		"fallback": "fa7-solid:calendar-week",
	});
}

export default Component;

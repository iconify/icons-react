import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-vszjbjs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-vszjbjs"/>`,
		"fallback": "fa7-solid:calendar-days",
	});
}

export default Component;

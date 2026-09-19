import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th6-23bwr.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th6-23bwr"/>`,
		"fallback": "vs:calendar-alt",
	});
}

export default Component;

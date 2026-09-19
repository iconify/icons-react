import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyscjjbci.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyscjjbci"/>`,
		"fallback": "fa6-regular:calendar-days",
	});
}

export default Component;

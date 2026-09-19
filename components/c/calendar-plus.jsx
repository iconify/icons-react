import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7wj43brc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7wj43brc"/>`,
		"fallback": "fa-regular:calendar-plus",
	});
}

export default Component;

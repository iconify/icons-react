import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_xvtz4fm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_xvtz4fm"/>`,
		"fallback": "fa-regular:calendar-check",
	});
}

export default Component;

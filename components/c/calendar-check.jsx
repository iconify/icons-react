import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiwps3bem.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiwps3bem"/>`,
		"fallback": "fa-solid:calendar-check",
	});
}

export default Component;

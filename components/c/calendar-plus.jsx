import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6l8pobbp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6l8pobbp"/>`,
		"fallback": "fa6-solid:calendar-plus",
	});
}

export default Component;

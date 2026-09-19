import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4bdfg_2a.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4bdfg_2a"/>`,
		"fallback": "fa-solid:calendar-times",
	});
}

export default Component;

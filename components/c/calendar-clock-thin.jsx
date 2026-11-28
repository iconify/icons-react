import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxx0n92ri.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxx0n92ri"/>`,
		"fallback": "pullo:calendar-clock-thin",
	});
}

export default Component;

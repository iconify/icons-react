import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whge_h7ho.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whge_h7ho"/>`,
		"fallback": "streamline:calendar-star-solid",
	});
}

export default Component;

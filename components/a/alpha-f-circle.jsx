import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7kwija_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7kwija_k"/>`,
		"fallback": "mdi:alpha-f-circle",
	});
}

export default Component;

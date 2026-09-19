import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0i42zhal.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0i42zhal"/>`,
		"fallback": "f7:arrow-turn-down-left",
	});
}

export default Component;

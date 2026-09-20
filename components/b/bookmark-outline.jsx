import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prxccrbje.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prxccrbje"/>`,
		"fallback": "teenyicons:bookmark-outline",
	});
}

export default Component;

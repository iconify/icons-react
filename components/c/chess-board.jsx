import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj6hiybni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj6hiybni"/>`,
		"fallback": "fa-solid:chess-board",
	});
}

export default Component;

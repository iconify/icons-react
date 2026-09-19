import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsje7487x.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsje7487x"/>`,
		"fallback": "fa-solid:chess-king",
	});
}

export default Component;

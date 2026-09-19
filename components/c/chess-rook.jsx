import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1whq8ces.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1whq8ces"/>`,
		"fallback": "fa6-solid:chess-rook",
	});
}

export default Component;

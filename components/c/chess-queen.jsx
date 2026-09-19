import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu-vsqb9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu-vsqb9o"/>`,
		"fallback": "fa6-solid:chess-queen",
	});
}

export default Component;

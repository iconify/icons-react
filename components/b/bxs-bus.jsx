import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu87s-b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu87s-b1r"/>`,
		"fallback": "bx:bxs-bus",
	});
}

export default Component;

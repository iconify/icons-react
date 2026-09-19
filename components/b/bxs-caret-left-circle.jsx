import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk0ow5b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk0ow5b3t"/>`,
		"fallback": "bx:bxs-caret-left-circle",
	});
}

export default Component;

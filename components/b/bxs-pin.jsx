import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb0r9l_nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb0r9l_nb"/>`,
		"fallback": "bx:bxs-pin",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj978js3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj978js3h"/>`,
		"fallback": "bx:bxs-spray-can",
	});
}

export default Component;

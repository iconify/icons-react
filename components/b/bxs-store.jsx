import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxca7_wsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxca7_wsz"/>`,
		"fallback": "bx:bxs-store",
	});
}

export default Component;

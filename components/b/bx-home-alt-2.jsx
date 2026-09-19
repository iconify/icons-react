import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdure-b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdure-b1o"/>`,
		"fallback": "bx:bx-home-alt-2",
	});
}

export default Component;

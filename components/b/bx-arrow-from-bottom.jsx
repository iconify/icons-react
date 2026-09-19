import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvxld2hkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvxld2hkt"/>`,
		"fallback": "bx:bx-arrow-from-bottom",
	});
}

export default Component;

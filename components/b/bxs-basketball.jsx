import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekp8m2b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekp8m2b8m"/>`,
		"fallback": "bx:bxs-basketball",
	});
}

export default Component;

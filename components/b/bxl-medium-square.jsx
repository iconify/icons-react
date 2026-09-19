import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec-7urx9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec-7urx9u"/>`,
		"fallback": "bx:bxl-medium-square",
	});
}

export default Component;

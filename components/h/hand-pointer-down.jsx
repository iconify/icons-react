import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vor1jkb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vor1jkb1y"/>`,
		"fallback": "keyline-icons:hand-pointer-down",
	});
}

export default Component;

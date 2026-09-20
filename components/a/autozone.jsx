import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki86rqbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki86rqbyb"/>`,
		"fallback": "thesvg:autozone",
	});
}

export default Component;

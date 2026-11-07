import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i19p1mgnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i19p1mgnu"/>`,
		"fallback": "solar:flame-broken",
	});
}

export default Component;

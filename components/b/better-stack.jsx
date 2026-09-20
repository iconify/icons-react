import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz8zjf2gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz8zjf2gy"/>`,
		"fallback": "thesvg-color:better-stack",
	});
}

export default Component;

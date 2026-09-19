import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugt25bbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugt25bbig"/>`,
		"fallback": "circum:ice-cream",
	});
}

export default Component;

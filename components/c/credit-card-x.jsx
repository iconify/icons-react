import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8dzq68aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8dzq68aj"/>`,
		"fallback": "noviair-light:credit-card-x",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkow5mkrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkow5mkrr"/>`,
		"fallback": "streamline-ultimate:cocktail-glass-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miyh6-9ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miyh6-9ir"/>`,
		"fallback": "noviair-light:flame-off",
	});
}

export default Component;

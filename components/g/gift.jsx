import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnw1lqbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnw1lqbto"/>`,
		"fallback": "humbleicons:gift",
	});
}

export default Component;

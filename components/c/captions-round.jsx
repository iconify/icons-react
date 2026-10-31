import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7yuivz8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7yuivz8o"/>`,
		"fallback": "coolicons:captions-round",
	});
}

export default Component;

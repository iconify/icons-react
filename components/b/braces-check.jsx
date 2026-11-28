import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfhs66b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfhs66b7l"/>`,
		"fallback": "noviair-light:braces-check",
	});
}

export default Component;

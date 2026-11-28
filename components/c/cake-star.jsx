import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh147-8qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh147-8qh"/>`,
		"fallback": "noviair-light:cake-star",
	});
}

export default Component;

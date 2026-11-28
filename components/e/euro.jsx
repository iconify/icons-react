import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtjs5r6lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtjs5r6lh"/>`,
		"fallback": "noviair-light:euro",
	});
}

export default Component;

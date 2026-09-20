import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onwk3j-1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onwk3j-1y"/>`,
		"fallback": "solar:flame-linear",
	});
}

export default Component;

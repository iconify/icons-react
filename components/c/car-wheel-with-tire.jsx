import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1wohmrfu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1wohmrfu"/>`,
		"fallback": "pinhead:car-wheel-with-tire",
	});
}

export default Component;

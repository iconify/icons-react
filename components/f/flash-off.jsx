import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4xwiyftz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4xwiyftz"/>`,
		"fallback": "carbon:flash-off",
	});
}

export default Component;

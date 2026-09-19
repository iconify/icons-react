import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3c4xk9ys.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3c4xk9ys"/>`,
		"fallback": "fa7-solid:house-user",
	});
}

export default Component;

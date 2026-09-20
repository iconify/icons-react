import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f78rt7b6c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f78rt7b6c"/>`,
		"fallback": "la:chess-queen-solid",
	});
}

export default Component;

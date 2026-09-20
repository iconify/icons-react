import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6algxbzi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6algxbzi"/>`,
		"fallback": "la:ad",
	});
}

export default Component;

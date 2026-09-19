import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzqj45pit.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzqj45pit"/>`,
		"fallback": "carbon:border-bottom",
	});
}

export default Component;

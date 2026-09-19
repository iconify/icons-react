import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-dg5fbiy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-dg5fbiy"/>`,
		"fallback": "carbon:categorical-palette",
	});
}

export default Component;

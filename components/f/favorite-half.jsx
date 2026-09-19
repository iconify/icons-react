import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa1m9d30z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa1m9d30z"/>`,
		"fallback": "carbon:favorite-half",
	});
}

export default Component;

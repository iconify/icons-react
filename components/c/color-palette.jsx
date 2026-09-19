import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiynvfq8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiynvfq8f"/>`,
		"fallback": "ion:color-palette",
	});
}

export default Component;

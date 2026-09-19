import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2j9s7bfr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2j9s7bfr"/>`,
		"fallback": "fa6-brands:imdb",
	});
}

export default Component;

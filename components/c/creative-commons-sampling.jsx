import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptjs_9bsa.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptjs_9bsa"/>`,
		"fallback": "fa-brands:creative-commons-sampling",
	});
}

export default Component;

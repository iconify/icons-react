import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k83nmqr9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k83nmqr9k"/>`,
		"fallback": "fa6-solid:headphones",
	});
}

export default Component;

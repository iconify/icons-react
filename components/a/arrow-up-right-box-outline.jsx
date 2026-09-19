import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5-g-c5hp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5-g-c5hp"/>`,
		"fallback": "ion:arrow-up-right-box-outline",
	});
}

export default Component;

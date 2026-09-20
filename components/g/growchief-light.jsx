import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8x_9lbbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8x_9lbbu"/>`,
		"fallback": "selfhst:growchief-light",
	});
}

export default Component;

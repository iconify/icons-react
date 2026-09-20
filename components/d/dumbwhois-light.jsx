import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nokeo3bua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nokeo3bua"/>`,
		"fallback": "selfhst:dumbwhois-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdfl41b6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdfl41b6o"/>`,
		"fallback": "selfhst:bknd-light",
	});
}

export default Component;

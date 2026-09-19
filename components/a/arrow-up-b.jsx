import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8r1af9ja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8r1af9ja"/>`,
		"fallback": "ion:arrow-up-b",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nplhmob-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nplhmob-i"/>`,
		"fallback": "eva:arrow-circle-up-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iim9wiv8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iim9wiv8c"/>`,
		"fallback": "keyline-icons:banknote-check",
	});
}

export default Component;

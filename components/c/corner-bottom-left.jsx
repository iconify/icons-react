import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj8eh_udw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj8eh_udw"/>`,
		"fallback": "radix-icons:corner-bottom-left",
	});
}

export default Component;

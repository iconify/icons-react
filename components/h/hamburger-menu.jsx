import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th44pbcmr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th44pbcmr"/>`,
		"fallback": "radix-icons:hamburger-menu",
	});
}

export default Component;

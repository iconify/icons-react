import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajs828bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajs828bnr"/>`,
		"fallback": "keyline-icons:cursor-text-sharp",
	});
}

export default Component;

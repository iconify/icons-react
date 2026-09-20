import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akdc04zlf.css';
import '../../css/a/asob6ykds.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akdc04zlf"/><path class="asob6ykds"/>`,
		"fallback": "streamline-pixel:food-drink-hamburger",
	});
}

export default Component;

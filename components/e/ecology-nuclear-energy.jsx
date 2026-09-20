import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk7rcacre.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk7rcacre"/>`,
		"fallback": "streamline-pixel:ecology-nuclear-energy",
	});
}

export default Component;

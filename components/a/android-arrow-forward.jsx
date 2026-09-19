import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn199flym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn199flym"/>`,
		"fallback": "ion:android-arrow-forward",
	});
}

export default Component;

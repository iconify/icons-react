import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksvv1jbrz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksvv1jbrz"/>`,
		"fallback": "ion:android-sunny",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nirzt8hqp.css';
import '../../css/k/kite7abkb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nirzt8hqp"/><path class="kite7abkb"/>`,
		"fallback": "energy-icons:image-sparkle-20-bold",
	});
}

export default Component;

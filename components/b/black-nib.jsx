import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2uncfcru.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2uncfcru"/>`,
		"fallback": "fluent-emoji-high-contrast:black-nib",
	});
}

export default Component;

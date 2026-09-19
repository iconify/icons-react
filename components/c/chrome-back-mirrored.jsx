import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap8hstwxb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap8hstwxb"/>`,
		"fallback": "fluent-mdl2:chrome-back-mirrored",
	});
}

export default Component;

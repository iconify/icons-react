import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxgsmd1pz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxgsmd1pz"/>`,
		"fallback": "fluent-emoji-flat:black-large-square",
	});
}

export default Component;

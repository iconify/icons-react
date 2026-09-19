import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubsgd0b7a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubsgd0b7a"/>`,
		"fallback": "fluent-emoji-high-contrast:hourglass-done",
	});
}

export default Component;

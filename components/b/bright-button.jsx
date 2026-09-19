import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgiy9tb0v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgiy9tb0v"/>`,
		"fallback": "fluent-emoji-high-contrast:bright-button",
	});
}

export default Component;

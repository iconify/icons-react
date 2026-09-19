import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz6m-e_na.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz6m-e_na"/>`,
		"fallback": "fluent-emoji-high-contrast:glass-of-milk",
	});
}

export default Component;

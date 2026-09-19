import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxz7cltnn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxz7cltnn"/>`,
		"fallback": "fluent-emoji-high-contrast:bowl-with-spoon",
	});
}

export default Component;

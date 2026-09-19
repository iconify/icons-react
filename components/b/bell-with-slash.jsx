import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5r145l-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5r145l-a"/>`,
		"fallback": "fluent-emoji-high-contrast:bell-with-slash",
	});
}

export default Component;

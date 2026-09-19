import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp84hibku.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp84hibku"/>`,
		"fallback": "fluent-emoji-high-contrast:diamond-suit",
	});
}

export default Component;

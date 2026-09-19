import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geuk91bla.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geuk91bla"/>`,
		"fallback": "fluent-emoji-high-contrast:funeral-urn",
	});
}

export default Component;

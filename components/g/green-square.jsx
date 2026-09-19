import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaueldbkl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaueldbkl"/>`,
		"fallback": "fluent-emoji-flat:green-square",
	});
}

export default Component;

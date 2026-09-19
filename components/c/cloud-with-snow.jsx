import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de2nv-xgy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de2nv-xgy"/>`,
		"fallback": "fluent-emoji-high-contrast:cloud-with-snow",
	});
}

export default Component;

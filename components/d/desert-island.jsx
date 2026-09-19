import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exudxrtdx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="exudxrtdx"/>`,
		"fallback": "fluent-emoji-high-contrast:desert-island",
	});
}

export default Component;

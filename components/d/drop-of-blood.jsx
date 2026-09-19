import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps0ot-_-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps0ot-_-h"/>`,
		"fallback": "fluent-emoji-high-contrast:drop-of-blood",
	});
}

export default Component;

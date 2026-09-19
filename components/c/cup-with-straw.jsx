import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdap3vb6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdap3vb6e"/>`,
		"fallback": "fluent-emoji-high-contrast:cup-with-straw",
	});
}

export default Component;

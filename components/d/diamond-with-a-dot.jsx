import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wimya7lca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wimya7lca"/>`,
		"fallback": "fluent-emoji-high-contrast:diamond-with-a-dot",
	});
}

export default Component;

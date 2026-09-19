import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlf7nkb4q.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlf7nkb4q"/>`,
		"fallback": "whh:equalizeralt",
	});
}

export default Component;

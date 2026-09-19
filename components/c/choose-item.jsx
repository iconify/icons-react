import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p619a9b0n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p619a9b0n"/>`,
		"fallback": "carbon:choose-item",
	});
}

export default Component;

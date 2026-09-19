import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3h-9fb2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3h-9fb2n"/>`,
		"fallback": "fluent-emoji-high-contrast:bell",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thorh_-yv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thorh_-yv"/>`,
		"fallback": "fluent-emoji-high-contrast:cross-mark",
	});
}

export default Component;

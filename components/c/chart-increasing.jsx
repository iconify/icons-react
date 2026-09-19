import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czbb_xjwz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czbb_xjwz"/>`,
		"fallback": "fluent-emoji-high-contrast:chart-increasing",
	});
}

export default Component;

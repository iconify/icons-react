import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv17vp8ce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv17vp8ce"/>`,
		"fallback": "fluent-emoji-high-contrast:adhesive-bandage",
	});
}

export default Component;

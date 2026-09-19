import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysfpi3b8a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysfpi3b8a"/>`,
		"fallback": "fluent-emoji-high-contrast:infinity",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hysehgb4l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hysehgb4l"/>`,
		"fallback": "fluent-emoji-high-contrast:evergreen-tree",
	});
}

export default Component;

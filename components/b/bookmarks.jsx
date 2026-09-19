import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-1udr6lm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-1udr6lm"/>`,
		"fallback": "fluent-mdl2:bookmarks",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-use9c3z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-use9c3z"/>`,
		"fallback": "fluent-mdl2:frigid",
	});
}

export default Component;

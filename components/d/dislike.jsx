import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n37jz3b9i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n37jz3b9i"/>`,
		"fallback": "fluent-mdl2:dislike",
	});
}

export default Component;

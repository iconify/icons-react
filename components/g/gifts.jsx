import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b71fi303z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b71fi303z"/>`,
		"fallback": "la:gifts",
	});
}

export default Component;

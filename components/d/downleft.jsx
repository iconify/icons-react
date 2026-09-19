import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud5onibxb.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud5onibxb"/>`,
		"fallback": "whh:downleft",
	});
}

export default Component;

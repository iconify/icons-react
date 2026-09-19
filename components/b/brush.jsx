import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjxhorbsi.css';

const viewBox = {"width":1026,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjxhorbsi"/>`,
		"fallback": "whh:brush",
	});
}

export default Component;

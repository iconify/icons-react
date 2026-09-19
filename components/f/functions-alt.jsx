import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc1e6ys7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc1e6ys7l"/>`,
		"fallback": "cil:functions-alt",
	});
}

export default Component;

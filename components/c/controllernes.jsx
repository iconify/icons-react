import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2lbpx99d.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2lbpx99d"/>`,
		"fallback": "whh:controllernes",
	});
}

export default Component;

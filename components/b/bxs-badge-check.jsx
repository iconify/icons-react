import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxs5jcbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxs5jcbqs"/>`,
		"fallback": "bx:bxs-badge-check",
	});
}

export default Component;

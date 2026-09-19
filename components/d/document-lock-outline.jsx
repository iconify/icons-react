import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu56fbc3i.css';
import '../../css/j/j8o08_b3e.css';
import '../../css/z/z07rjrbqz.css';
import '../../css/w/w_-9rrb7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu56fbc3i"/><path class="j8o08_b3e"/><path class="z07rjrbqz"/><path class="w_-9rrb7q"/>`,
		"fallback": "ion:document-lock-outline",
	});
}

export default Component;

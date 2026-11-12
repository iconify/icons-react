import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi9cg7bus.css';
import '../../css/c/c6xz9rq9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi9cg7bus"/><path class="c6xz9rq9g"/>`,
		"fallback": "selfhst:connectwise-screenconnect-dark",
	});
}

export default Component;

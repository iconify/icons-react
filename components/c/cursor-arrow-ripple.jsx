import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqn8tyz7h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lqn8tyz7h"/>`,
		"fallback": "heroicons-solid:cursor-arrow-ripple",
	});
}

export default Component;

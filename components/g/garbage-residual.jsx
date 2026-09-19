import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9zjfvjqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9zjfvjqn"/>`,
		"fallback": "cbi:garbage-residual",
	});
}

export default Component;

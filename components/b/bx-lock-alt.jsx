import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t33jnj4eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t33jnj4eq"/>`,
		"fallback": "bx:bx-lock-alt",
	});
}

export default Component;

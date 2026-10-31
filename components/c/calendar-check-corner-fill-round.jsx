import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnzjm8e7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnzjm8e7d"/>`,
		"fallback": "coolicons:calendar-check-corner-fill-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnz4h-flh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnz4h-flh"/>`,
		"fallback": "typcn:group-outline",
	});
}

export default Component;

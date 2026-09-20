import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnrdf8biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnrdf8biy"/>`,
		"fallback": "token:blt",
	});
}

export default Component;

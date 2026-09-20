import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jntr1kbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jntr1kbuj"/>`,
		"fallback": "thesvg-color:falco",
	});
}

export default Component;

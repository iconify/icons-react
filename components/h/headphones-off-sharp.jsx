import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnr1cdgtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnr1cdgtb"/>`,
		"fallback": "keyline-icons:headphones-off-sharp",
	});
}

export default Component;

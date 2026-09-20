import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnlctj5oi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnlctj5oi"/>`,
		"fallback": "selfhst:astroluma-dark",
	});
}

export default Component;

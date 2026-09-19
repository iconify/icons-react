import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8wj7jntu.css';

const viewBox = {"width":717,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8wj7jntu"/>`,
		"fallback": "ls:etc",
	});
}

export default Component;

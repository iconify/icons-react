import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnxj8rb3h.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnxj8rb3h"/>`,
		"fallback": "system-uicons:download",
	});
}

export default Component;

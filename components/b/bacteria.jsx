import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa5fubcqx.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa5fubcqx"/>`,
		"fallback": "fa-solid:bacteria",
	});
}

export default Component;

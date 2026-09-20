import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciwhunbto.css';
import '../../css/c/c3l2dyibj.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciwhunbto"/><path class="c3l2dyibj"/>`,
		"fallback": "lineicons:enter",
	});
}

export default Component;

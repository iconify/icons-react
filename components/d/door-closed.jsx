import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2zq-9byz.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2zq-9byz"/>`,
		"fallback": "fa-solid:door-closed",
	});
}

export default Component;

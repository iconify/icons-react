import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo6qorwfu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo6qorwfu"/>`,
		"fallback": "fa6-solid:hurricane",
	});
}

export default Component;

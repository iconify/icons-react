import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbw3xobnz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbw3xobnz"/>`,
		"fallback": "fa7-solid:hexagon-nodes-bolt",
	});
}

export default Component;

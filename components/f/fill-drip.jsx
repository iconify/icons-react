import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps_32bbnb.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps_32bbnb"/>`,
		"fallback": "fa-solid:fill-drip",
	});
}

export default Component;

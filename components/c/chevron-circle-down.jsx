import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbzpepbes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbzpepbes"/>`,
		"fallback": "fa-solid:chevron-circle-down",
	});
}

export default Component;

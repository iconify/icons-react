import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7yhanbtb.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7yhanbtb"/>`,
		"fallback": "fa6-brands:debian",
	});
}

export default Component;

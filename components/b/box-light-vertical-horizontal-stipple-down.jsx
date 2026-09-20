import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f00xnhb_k.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f00xnhb_k"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-down",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6182vc9x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6182vc9x"/>`,
		"fallback": "memory:alpha-s-fill",
	});
}

export default Component;

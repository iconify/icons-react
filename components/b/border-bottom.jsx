import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw16btbdv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw16btbdv"/>`,
		"fallback": "zondicons:border-bottom",
	});
}

export default Component;

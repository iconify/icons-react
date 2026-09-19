import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubob10ayu.css';
import '../../css/t/tl4woi6ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubob10ayu"/><path class="tl4woi6ej"/>`,
		"fallback": "bx:bx-medal",
	});
}

export default Component;

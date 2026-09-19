import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k77y28blt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k77y28blt"/>`,
		"fallback": "f7:chevron-left-circle",
	});
}

export default Component;

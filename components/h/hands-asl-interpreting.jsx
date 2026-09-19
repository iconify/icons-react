import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opi5-vb6h.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opi5-vb6h"/>`,
		"fallback": "fa6-solid:hands-asl-interpreting",
	});
}

export default Component;

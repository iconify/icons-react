import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdt1j_b8c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdt1j_b8c"/>`,
		"fallback": "oi:code",
	});
}

export default Component;

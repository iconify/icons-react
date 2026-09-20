import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx6vq2bxp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx6vq2bxp"/>`,
		"fallback": "oi:eye",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke8sr7biv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke8sr7biv"/>`,
		"fallback": "fa-solid:camera",
	});
}

export default Component;

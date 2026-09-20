import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvfl5p4bi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvfl5p4bi"/>`,
		"fallback": "la:bluetooth-b",
	});
}

export default Component;

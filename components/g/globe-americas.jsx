import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0sf03b5r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0sf03b5r"/>`,
		"fallback": "la:globe-americas",
	});
}

export default Component;

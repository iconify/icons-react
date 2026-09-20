import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sod9htjhn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sod9htjhn"/>`,
		"fallback": "la:hornbill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4w5r3bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4w5r3bpb"/>`,
		"fallback": "noviair-light:earbuds-x",
	});
}

export default Component;

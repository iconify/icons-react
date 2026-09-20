import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juppfpb9r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juppfpb9r"/>`,
		"fallback": "la:facebook-f",
	});
}

export default Component;

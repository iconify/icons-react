import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1ptg-o8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1ptg-o8v"/>`,
		"fallback": "la:id-badge-solid",
	});
}

export default Component;

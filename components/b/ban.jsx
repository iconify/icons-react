import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duj4s1--s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duj4s1--s"/>`,
		"fallback": "oi:ban",
	});
}

export default Component;

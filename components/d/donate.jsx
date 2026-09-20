import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_p301b2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_p301b2n"/>`,
		"fallback": "la:donate",
	});
}

export default Component;

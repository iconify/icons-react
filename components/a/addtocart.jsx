import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4wmvub_k.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4wmvub_k"/>`,
		"fallback": "whh:addtocart",
	});
}

export default Component;

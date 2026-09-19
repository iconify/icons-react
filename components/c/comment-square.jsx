import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr0lfd5rv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr0lfd5rv"/>`,
		"fallback": "cil:comment-square",
	});
}

export default Component;

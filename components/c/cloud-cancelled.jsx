import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh5ytpbvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh5ytpbvo"/>`,
		"fallback": "ix:cloud-cancelled",
	});
}

export default Component;

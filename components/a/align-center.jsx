import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4e1gyb1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4e1gyb1n"/>`,
		"fallback": "cil:align-center",
	});
}

export default Component;

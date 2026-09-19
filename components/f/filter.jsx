import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmcj6_b0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmcj6_b0l"/>`,
		"fallback": "cil:filter",
	});
}

export default Component;

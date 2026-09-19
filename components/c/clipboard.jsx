import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx80qc3zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx80qc3zb"/>`,
		"fallback": "mono-icons:clipboard",
	});
}

export default Component;

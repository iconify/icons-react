import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8kir_j1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8kir_j1n"/>`,
		"fallback": "ix:barchart-horizontal",
	});
}

export default Component;

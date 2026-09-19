import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocssg7g_j.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocssg7g_j"/>`,
		"fallback": "fa-brands:bluetooth-b",
	});
}

export default Component;

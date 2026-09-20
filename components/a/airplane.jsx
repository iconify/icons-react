import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek3k3cbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ek3k3cbmr"/>`,
		"fallback": "majesticons:airplane",
	});
}

export default Component;

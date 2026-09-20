import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0zno-lyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0zno-lyf"/>`,
		"fallback": "solar:cloud-bolt-minimalistic-outline",
	});
}

export default Component;

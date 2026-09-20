import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf-ow3pxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf-ow3pxk"/>`,
		"fallback": "solar:buildings-3-bold",
	});
}

export default Component;

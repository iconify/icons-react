import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w8uyv4b4k.css';
import '../../css/x/xzbuq9b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w8uyv4b4k"/><path class="xzbuq9b5d"/></g>`,
		"fallback": "solar:crown-star-outline",
	});
}

export default Component;

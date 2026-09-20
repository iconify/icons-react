import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdu34r1wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdu34r1wc"/>`,
		"fallback": "si:airplane-alt-fill",
	});
}

export default Component;

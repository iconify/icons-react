import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d0-lzibjk.css';
import '../../css/a/a7wo-_biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d0-lzibjk"/><path class="a7wo-_biw"/></g>`,
		"fallback": "hugeicons:archive-x",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x7js5bb9h.css';
import '../../css/a/a235_6biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x7js5bb9h"/><path class="a235_6biy"/></g>`,
		"fallback": "hugeicons:hamburger-02",
	});
}

export default Component;

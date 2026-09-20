import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/whmpjxefc.css';
import '../../css/i/i46k68_po.css';
import '../../css/j/j-4iesbnf.css';
import '../../css/y/ymcclky0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="whmpjxefc"/><path class="i46k68_po"/><path class="j-4iesbnf"/><path class="ymcclky0z"/></g>`,
		"fallback": "solar:banknote-linear",
	});
}

export default Component;

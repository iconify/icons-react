import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i4dcgmbin.css';
import '../../css/r/rjoebe5pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i4dcgmbin"/><path class="rjoebe5pr"/></g>`,
		"fallback": "solar:folder-favourite-bookmark-broken",
	});
}

export default Component;

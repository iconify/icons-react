import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nfxwups2m.css';
import '../../css/f/fhmjgx_zw.css';
import '../../css/g/g6wm6g5mh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nfxwups2m"/><path class="fhmjgx_zw"/><path class="g6wm6g5mh"/></g>`,
		"fallback": "hugeicons:card-exchange-01",
	});
}

export default Component;

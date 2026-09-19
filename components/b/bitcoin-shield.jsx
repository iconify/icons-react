import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/ss184zbvm.css';
import '../../css/o/ozpbdqbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ss184zbvm"/><path class="ozpbdqbex"/></g>`,
		"fallback": "hugeicons:bitcoin-shield",
	});
}

export default Component;

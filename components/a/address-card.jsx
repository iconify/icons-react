import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8x5l_bcy.css';
import '../../css/i/ipq564i7x.css';
import '../../css/u/umur_bc0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8x5l_bcy"/><path clip-rule="evenodd" class="ipq564i7x"/><path clip-rule="evenodd" class="umur_bc0b"/></g>`,
		"fallback": "reicon:address-card",
	});
}

export default Component;

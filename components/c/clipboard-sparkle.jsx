import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izxt2wbud.css';
import '../../css/w/wvvtfqbgs.css';
import '../../css/n/nfryhn5zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="izxt2wbud"/><path class="wvvtfqbgs"/><path class="nfryhn5zj"/></g>`,
		"fallback": "andrsrxn:clipboard-sparkle",
	});
}

export default Component;

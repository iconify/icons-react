import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk-sf0bqw.css';
import '../../css/b/bn9byo-4k.css';
import '../../css/s/s4m08qbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wk-sf0bqw"/><path class="bn9byo-4k"/><path class="s4m08qbty"/></g>`,
		"fallback": "andrsrxn:earbuds-left",
	});
}

export default Component;

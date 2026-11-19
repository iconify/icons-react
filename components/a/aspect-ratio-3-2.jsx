import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eubq8_boh.css';
import '../../css/b/blnanb_bb.css';
import '../../css/u/u6hewzbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eubq8_boh"/><path class="blnanb_bb"/><path class="u6hewzbzd"/></g>`,
		"fallback": "andrsrxn:aspect-ratio-3-2",
	});
}

export default Component;

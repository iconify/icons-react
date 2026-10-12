import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igq5atbrj.css';
import '../../css/n/nwpa4p52r.css';
import '../../css/u/u953isb0v.css';
import '../../css/a/aiwq2mb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="igq5atbrj"/><path class="nwpa4p52r"/><rect class="u953isb0v"/><path class="aiwq2mb0w"/></g>`,
		"fallback": "andrsrxn:book-lock",
	});
}

export default Component;

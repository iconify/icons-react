import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whds854dl.css';
import '../../css/h/h9ypzzb2w.css';
import '../../css/y/yyc19gboe.css';
import '../../css/j/jntr0lrls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="whds854dl"/><path class="h9ypzzb2w"/><path class="yyc19gboe"/><path class="jntr0lrls"/></g>`,
		"fallback": "andrsrxn:croissant",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l07hne7yb.css';
import '../../css/f/f2k14hb4i.css';
import '../../css/j/j0l-ykx4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l07hne7yb"/><path class="f2k14hb4i"/><path class="j0l-ykx4z"/></g>`,
		"fallback": "andrsrxn:currency-myr-circle",
	});
}

export default Component;

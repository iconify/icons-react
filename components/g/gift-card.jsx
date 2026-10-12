import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btlr1rvkj.css';
import '../../css/l/lenb8fbpx.css';
import '../../css/j/jsvzzc_wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btlr1rvkj"/><rect transform="matrix(0 -1 -1 0 22.36 19.42)" class="lenb8fbpx"/><path class="jsvzzc_wd"/></g>`,
		"fallback": "andrsrxn:gift-card",
	});
}

export default Component;

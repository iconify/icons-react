import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-bw6wa-j.css';
import '../../css/j/jlsu5iqcr.css';
import '../../css/n/ngmltab6q.css';
import '../../css/w/whw_3lguc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-bw6wa-j"/><path class="jlsu5iqcr"/><path class="ngmltab6q"/><path class="whw_3lguc"/></g>`,
		"fallback": "andrsrxn:bowling",
	});
}

export default Component;

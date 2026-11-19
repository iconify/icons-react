import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouctj5b8q.css';
import '../../css/d/dwxt_ku0j.css';
import '../../css/w/wbxs82bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouctj5b8q"/><path class="dwxt_ku0j"/><path class="wbxs82bdz"/></g>`,
		"fallback": "andrsrxn:chart-line-up-square",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw3_nkbwk.css';
import '../../css/b/b12xwobnv.css';
import '../../css/o/o_6x-abbh.css';
import '../../css/z/zsae5lb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xw3_nkbwk"/><path class="b12xwobnv"/><rect transform="rotate(-90 15.5 20.35)" class="o_6x-abbh"/><path class="zsae5lb-y"/></g>`,
		"fallback": "andrsrxn:devices",
	});
}

export default Component;

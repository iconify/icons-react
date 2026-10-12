import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwrbzjb5e.css';
import '../../css/a/aoxrtp9nb.css';
import '../../css/i/ib0shfeph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gwrbzjb5e"/><path class="aoxrtp9nb"/><path class="ib0shfeph"/></g>`,
		"fallback": "andrsrxn:egg-crack",
	});
}

export default Component;

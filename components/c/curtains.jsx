import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4pf3bc8u.css';
import '../../css/n/n67p4h0hf.css';
import '../../css/a/aqc8ejbpo.css';
import '../../css/n/nkpydqb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b4pf3bc8u"/><path class="n67p4h0hf"/><path class="aqc8ejbpo"/><path class="nkpydqb0g"/></g>`,
		"fallback": "andrsrxn:curtains",
	});
}

export default Component;

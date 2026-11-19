import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/x/xah9dvtrw.css';
import '../../css/j/joumn0p2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="xah9dvtrw"/><path class="joumn0p2r"/></g>`,
		"fallback": "andrsrxn:direction-up-merge",
	});
}

export default Component;

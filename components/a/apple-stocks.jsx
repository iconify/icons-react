import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/x/xpub6_xgc.css';
import '../../css/q/qz36qloyu.css';
import '../../css/i/ikdtfb-tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jvtjbnueh"/><path class="xpub6_xgc"/><path class="qz36qloyu"/><circle class="ikdtfb-tj"/></g>`,
		"fallback": "hugeicons:apple-stocks",
	});
}

export default Component;

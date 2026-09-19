import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/k/kqvstq_te.css';
import '../../css/j/jxo6gkyex.css';
import '../../css/n/ng_is0lis.css';
import '../../css/y/yqhdv_6tc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="kqvstq_te"/><path class="jxo6gkyex"/><path class="ng_is0lis"/><path class="yqhdv_6tc"/></g>`,
		"fallback": "icon-park:bytedance",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jt45ahbuy.css';
import '../../css/z/zgfkd3bzs.css';
import '../../css/x/xfjs0v6ev.css';
import '../../css/l/lbvc_2bwr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jt45ahbuy"/><path clip-rule="evenodd" class="zgfkd3bzs"/><path class="xfjs0v6ev"/><path clip-rule="evenodd" class="lbvc_2bwr"/></g>`,
		"fallback": "streamline-flex-color:gambling-flat",
	});
}

export default Component;

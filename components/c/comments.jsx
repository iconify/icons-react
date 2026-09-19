import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/n/n1zp82_3a.css';
import '../../css/p/ppon6yb-o.css';
import '../../css/x/x67x5trvh.css';
import '../../css/w/wbj551lzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="n1zp82_3a"/><path class="ppon6yb-o"/><path class="x67x5trvh"/><path class="wbj551lzc"/></g>`,
		"fallback": "icon-park:comments",
	});
}

export default Component;

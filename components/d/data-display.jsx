import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/m/msgncjdxc.css';
import '../../css/b/bhyjiupcc.css';
import '../../css/t/tpzz0kkpc.css';
import '../../css/u/u9wx_q8di.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pv-ktibnd"/><path class="msgncjdxc"/><path class="bhyjiupcc"/><path class="tpzz0kkpc"/><path class="u9wx_q8di"/></g>`,
		"fallback": "icon-park-solid:data-display",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/ze__q9b-y.css';
import '../../css/p/pxp48iyht.css';
import '../../css/m/msgncjdxc.css';
import '../../css/b/bhyjiupcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ze__q9b-y"/><path class="pxp48iyht"/><path class="msgncjdxc"/><path class="bhyjiupcc"/></g>`,
		"fallback": "icon-park-solid:data-lock",
	});
}

export default Component;

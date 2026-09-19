import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b7e_qlv_s.css';
import '../../css/p/p0mk-tbae.css';
import '../../css/n/nvc8cnbea.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b7e_qlv_s"/><path class="p0mk-tbae"/><path clip-rule="evenodd" class="nvc8cnbea"/></g>`,
		"fallback": "icon-park-solid:dashboard-car",
	});
}

export default Component;

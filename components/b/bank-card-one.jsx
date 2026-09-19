import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t366rs_zx.css';
import '../../css/k/kjzre3jgv.css';
import '../../css/x/xma6_zbrt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t366rs_zx"/><rect class="kjzre3jgv"/><path class="xma6_zbrt"/></g>`,
		"fallback": "icon-park-outline:bank-card-one",
	});
}

export default Component;

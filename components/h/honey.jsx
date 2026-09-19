import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/t0_fxfgza.css';
import '../../css/n/n5pa40b0a.css';
import '../../css/c/cpnv_xbzs.css';
import '../../css/x/xd6v6ebqj.css';
import '../../css/o/okm97z7eb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="t0_fxfgza"/><path class="n5pa40b0a"/><path class="cpnv_xbzs"/><path class="xd6v6ebqj"/><path class="okm97z7eb"/></g>`,
		"fallback": "icon-park:honey",
	});
}

export default Component;

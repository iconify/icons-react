import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tu7lv1bwo.css';
import '../../css/l/lwmxsqbjy.css';
import '../../css/h/hygxn_ioi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="tu7lv1bwo"/><path class="lwmxsqbjy"/><path class="hygxn_ioi"/></g>`,
		"fallback": "icon-park-outline:history",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4c0w6bsc.css';
import '../../css/d/d64lkxbht.css';
import '../../css/x/xe5lolo2k.css';
import '../../css/x/xqlreob9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4c0w6bsc"/><path class="d64lkxbht"/><path class="xe5lolo2k"/><path class="xqlreob9l"/></g>`,
		"fallback": "streamline-ultimate-color:crypto-currency-bitcoin-chip",
	});
}

export default Component;

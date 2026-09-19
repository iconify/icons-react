import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t013k49ky.css';
import '../../css/s/sutgbdv0l.css';
import '../../css/o/omi94nbqz.css';
import '../../css/i/i_r26abkr.css';
import '../../css/f/fg8zbvgik.css';
import '../../css/t/t6l_r4bqw.css';
import '../../css/a/aodls9b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t013k49ky"/><path class="sutgbdv0l"/><path class="omi94nbqz"/><path class="i_r26abkr"/><path class="fg8zbvgik"/><path class="t6l_r4bqw"/><path class="aodls9b8z"/></g>`,
		"fallback": "iconoir:drone-refresh",
	});
}

export default Component;

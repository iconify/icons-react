import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nh46-cchg.css';
import '../../css/u/u2ny3y7hc.css';
import '../../css/c/c9ds3xbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nh46-cchg"/><path class="u2ny3y7hc"/><path class="c9ds3xbvi"/></g>`,
		"fallback": "andrsrxn:file-half",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/paayxvxde.css';
import '../../css/q/qwu80lbmp.css';
import '../../css/d/dmzio9b4p.css';
import '../../css/l/lyw4o5ucl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="paayxvxde"/><path class="qwu80lbmp"/><path class="dmzio9b4p"/><path class="lyw4o5ucl"/></g>`,
		"fallback": "solar:book-bookmark-minimalistic-broken",
	});
}

export default Component;

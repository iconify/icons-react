import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w0qkllu2h.css';
import '../../css/n/nkpezbglv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w0qkllu2h"/><path class="nkpezbglv"/></g>`,
		"fallback": "solar:diagram-down-broken",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x733y_y1a.css';
import '../../css/i/imj983wsz.css';
import '../../css/p/pllsfnbyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x733y_y1a"/><path clip-rule="evenodd" class="imj983wsz"/><path class="pllsfnbyo"/></g>`,
		"fallback": "icon-park-outline:info",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqqpdrpvn.css';
import '../../css/w/whktdcc1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqqpdrpvn"/><path class="whktdcc1e"/></g>`,
		"fallback": "andrsrxn:bell-filled",
	});
}

export default Component;

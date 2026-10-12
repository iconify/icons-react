import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdx7w5brs.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/d/d_taw6y8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tdx7w5brs"/><circle class="mpf1g8bav"/><path class="d_taw6y8e"/></g>`,
		"fallback": "andrsrxn:bluetooth-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgpsbdc7o.css';
import '../../css/w/w5eqxnb7r.css';
import '../../css/r/ra8qqac_x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgpsbdc7o"/><path class="w5eqxnb7r"/><path clip-rule="evenodd" class="ra8qqac_x"/></g>`,
		"fallback": "streamline-flex-color:bill-4-flat",
	});
}

export default Component;

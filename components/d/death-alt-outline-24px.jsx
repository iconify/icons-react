import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iq2cl0ble.css';
import '../../css/c/cmib70_qd.css';
import '../../css/d/drj4s7sil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iq2cl0ble"/><path clip-rule="evenodd" class="cmib70_qd"/><path class="drj4s7sil"/></g>`,
		"fallback": "healthicons:death-alt-outline-24px",
	});
}

export default Component;

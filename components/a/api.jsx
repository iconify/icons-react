import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irp7e_uyd.css';
import '../../css/i/iviarcrrc.css';
import '../../css/i/iazsyxvhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="irp7e_uyd"/><rect class="iviarcrrc"/><path class="iazsyxvhx"/></g>`,
		"fallback": "andrsrxn:api",
	});
}

export default Component;

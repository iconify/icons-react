import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eg-5dbc8x.css';
import '../../css/o/o7e_y-m0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eg-5dbc8x"/><path clip-rule="evenodd" class="o7e_y-m0n"/></g>`,
		"fallback": "streamline-plump-color:cloud-off-flat",
	});
}

export default Component;

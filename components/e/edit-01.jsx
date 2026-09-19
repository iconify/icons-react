import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/d0t_o0b5n.css';
import '../../css/m/mt0ga6bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="d0t_o0b5n"/><path class="mt0ga6bxn"/></g>`,
		"fallback": "hugeicons:edit-01",
	});
}

export default Component;

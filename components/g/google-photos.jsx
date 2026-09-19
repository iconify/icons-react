import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mjse1ccgh.css';
import '../../css/p/p0okznb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mjse1ccgh"/><path class="p0okznb8o"/></g>`,
		"fallback": "hugeicons:google-photos",
	});
}

export default Component;

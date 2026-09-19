import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sq0uj5bje.css';
import '../../css/w/wxvfufvub.css';
import '../../css/h/h-8xygb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sq0uj5bje"/><path class="wxvfufvub"/><path class="h-8xygb0k"/></g>`,
		"fallback": "hugeicons:edit-off",
	});
}

export default Component;

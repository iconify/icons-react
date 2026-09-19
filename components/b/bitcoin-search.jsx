import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h8w7ikqqs.css';
import '../../css/s/s8bhpdt9z.css';
import '../../css/t/tqxj2bl_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="h8w7ikqqs"/><path class="s8bhpdt9z"/><path class="tqxj2bl_e"/></g>`,
		"fallback": "hugeicons:bitcoin-search",
	});
}

export default Component;

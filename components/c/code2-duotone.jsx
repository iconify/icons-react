import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vkd4cybld.css';
import '../../css/f/fa4zybbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vkd4cybld"/><path class="fa4zybbpn"/></g>`,
		"fallback": "reicon:code2-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kin6h5mtu.css';
import '../../css/f/futljpbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kin6h5mtu"/><path clip-rule="evenodd" class="futljpbbr"/></g>`,
		"fallback": "reicon:building",
	});
}

export default Component;

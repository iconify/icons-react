import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhpjewnlb.css';
import '../../css/w/wj7ho_80n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vhpjewnlb"/><path class="wj7ho_80n"/></g>`,
		"fallback": "reicon:ac2-duotone",
	});
}

export default Component;

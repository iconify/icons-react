import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxvyzpbvr.css';
import '../../css/s/sl2zlhbqn.css';
import '../../css/o/oc6808bph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nxvyzpbvr"/><path class="sl2zlhbqn"/><path class="oc6808bph"/></g>`,
		"fallback": "pepicons:color-picker",
	});
}

export default Component;

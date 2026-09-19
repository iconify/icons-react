import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dyiss4bpn.css';
import '../../css/w/wuztmgkkn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dyiss4bpn"/><path class="wuztmgkkn"/></g>`,
		"fallback": "bi:database-fill-add",
	});
}

export default Component;

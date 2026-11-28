import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hkjxbsm6n.css';
import '../../css/l/lz2wblbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hkjxbsm6n secondary"/><path class="lz2wblbht primary"/></g>`,
		"fallback": "iconaut:cpu-duotone",
	});
}

export default Component;

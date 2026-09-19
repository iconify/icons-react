import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vm-4cfhme.css';
import '../../css/f/ft5k1ybzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vm-4cfhme"/><path class="ft5k1ybzg"/></g>`,
		"fallback": "gg:corner-double-up-right",
	});
}

export default Component;

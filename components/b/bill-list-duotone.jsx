import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tl446sbvf.css';
import '../../css/p/p1_8k5k7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tl446sbvf"/><path class="p1_8k5k7n"/></g>`,
		"fallback": "reicon:bill-list-duotone",
	});
}

export default Component;

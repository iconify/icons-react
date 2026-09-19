import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4ftb_bcm.css';
import '../../css/x/x-8a3cl3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s4ftb_bcm"/><path class="x-8a3cl3z"/></g>`,
		"fallback": "gg:align-center",
	});
}

export default Component;

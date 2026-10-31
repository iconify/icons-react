import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jpi4zcg-k.css';
import '../../css/h/hbelxubrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jpi4zcg-k"/><path class="hbelxubrg"/></g>`,
		"fallback": "coolicons:bed-bulk-round",
	});
}

export default Component;

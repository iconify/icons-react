import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p44lmebax.css';
import '../../css/l/lk3mfzb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p44lmebax"/><path class="lk3mfzb5t"/></g>`,
		"fallback": "coolicons:bell-off-bulk-round",
	});
}

export default Component;

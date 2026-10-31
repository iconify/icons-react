import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b72fuevhb.css';
import '../../css/d/dkzo2nc7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b72fuevhb"/><path class="dkzo2nc7a"/></g>`,
		"fallback": "coolicons:bell-ring-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byk-bbetb.css';
import '../../css/c/cb8v9objn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="byk-bbetb"/><path class="cb8v9objn"/></g>`,
		"fallback": "coolicons:burger-bulk-round",
	});
}

export default Component;

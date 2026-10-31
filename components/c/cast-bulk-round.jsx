import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgmzfpbue.css';
import '../../css/b/b0r9g3bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wgmzfpbue"/><path class="b0r9g3bcd"/></g>`,
		"fallback": "coolicons:cast-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw86v5bkd.css';
import '../../css/b/blws67bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sw86v5bkd"/><path class="blws67bkb"/></g>`,
		"fallback": "iconaut:file-stack-solid",
	});
}

export default Component;

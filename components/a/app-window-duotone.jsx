import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yfku__iqb.css';
import '../../css/c/cvoz9bbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yfku__iqb"/><path class="cvoz9bbsx"/></g>`,
		"fallback": "keyline-icons:app-window-duotone",
	});
}

export default Component;

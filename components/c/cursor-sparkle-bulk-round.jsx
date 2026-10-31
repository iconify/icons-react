import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fzd5ie_fo.css';
import '../../css/w/whhvmkbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fzd5ie_fo"/><path class="whhvmkbqa"/></g>`,
		"fallback": "coolicons:cursor-sparkle-bulk-round",
	});
}

export default Component;

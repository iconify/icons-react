import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yykf722eo.css';
import '../../css/p/pbmcn0b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yykf722eo"/><path class="pbmcn0b0l"/></g>`,
		"fallback": "coolicons:headset-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6wzqpb1u.css';
import '../../css/k/k4smnu93g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z6wzqpb1u"/><path class="k4smnu93g"/></g>`,
		"fallback": "coolicons:facebook-bulk-round",
	});
}

export default Component;

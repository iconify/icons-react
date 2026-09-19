import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jp5cmcbmf.css';
import '../../css/k/k-za2e_9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jp5cmcbmf"/><path class="k-za2e_9f"/></g>`,
		"fallback": "gg:framer",
	});
}

export default Component;

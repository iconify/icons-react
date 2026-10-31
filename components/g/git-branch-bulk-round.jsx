import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/panz28b2u.css';
import '../../css/p/ptdxjdzjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="panz28b2u"/><path class="ptdxjdzjw"/></g>`,
		"fallback": "coolicons:git-branch-bulk-round",
	});
}

export default Component;

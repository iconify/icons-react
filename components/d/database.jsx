import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c5ln91l4r.css';
import '../../css/t/tgtjg-w6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c5ln91l4r"/><path clip-rule="evenodd" class="tgtjg-w6k"/></g>`,
		"fallback": "gg:database",
	});
}

export default Component;

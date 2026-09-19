import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2mo0os_p.css';
import '../../css/k/k4_3dib7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2mo0os_p"/><path clip-rule="evenodd" class="k4_3dib7r"/></g>`,
		"fallback": "gg:ghost-character",
	});
}

export default Component;

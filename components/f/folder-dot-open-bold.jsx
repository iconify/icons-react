import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjnoyjbxd.css';
import '../../css/c/cqdcsh0ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bjnoyjbxd"/><path class="cqdcsh0ot"/></g>`,
		"fallback": "solar:folder-dot-open-bold",
	});
}

export default Component;

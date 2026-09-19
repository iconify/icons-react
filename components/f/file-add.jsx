import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pies8fbic.css';
import '../../css/p/pqgouud7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pies8fbic"/><path clip-rule="evenodd" class="pqgouud7z"/></g>`,
		"fallback": "gg:file-add",
	});
}

export default Component;

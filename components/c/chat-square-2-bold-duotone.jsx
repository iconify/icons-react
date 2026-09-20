import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/z/z8-uod0ms.css';
import '../../css/l/l_rtxu4wa.css';
import '../../css/j/jf3evj6wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="z8-uod0ms"/><path class="l_rtxu4wa"/><path class="jf3evj6wi"/></g>`,
		"fallback": "solar:chat-square-2-bold-duotone",
	});
}

export default Component;

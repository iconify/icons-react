import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6bd99rxg.css';
import '../../css/s/s-qsbubff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6bd99rxg"/><path clip-rule="evenodd" class="s-qsbubff"/></g>`,
		"fallback": "reicon:cloud-bolt2-duotone",
	});
}

export default Component;

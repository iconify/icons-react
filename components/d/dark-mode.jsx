import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztfqpkbnh.css';
import '../../css/r/rf9ieabyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ztfqpkbnh"/><path clip-rule="evenodd" class="rf9ieabyw"/></g>`,
		"fallback": "gg:dark-mode",
	});
}

export default Component;

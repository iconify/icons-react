import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gl8qqtbtx.css';
import '../../css/f/fvjkdnbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gl8qqtbtx"/><path clip-rule="evenodd" class="fvjkdnbgw"/></g>`,
		"fallback": "gg:calendar",
	});
}

export default Component;

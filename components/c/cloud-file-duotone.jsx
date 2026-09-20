import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4lnlsbhw.css';
import '../../css/g/g6iuwmb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4lnlsbhw"/><path class="g6iuwmb8y"/></g>`,
		"fallback": "reicon:cloud-file-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otiowjb7f.css';
import '../../css/l/lmho6lbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="otiowjb7f secondary"/><path class="lmho6lbwk primary"/></g>`,
		"fallback": "iconaut:file-clock-duotone",
	});
}

export default Component;

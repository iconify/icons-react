import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdpsx6bcl.css';
import '../../css/o/o8nazouto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hdpsx6bcl secondary"/><path class="o8nazouto primary"/></g>`,
		"fallback": "iconaut:copy-off-duotone",
	});
}

export default Component;

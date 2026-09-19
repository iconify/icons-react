import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jns0vbcxv.css';
import '../../css/l/lfaydobxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jns0vbcxv"/><path clip-rule="evenodd" class="lfaydobxd"/></g>`,
		"fallback": "gg:arrow-top-right-r",
	});
}

export default Component;

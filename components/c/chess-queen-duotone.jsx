import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zp30slbsv.css';
import '../../css/u/u5_aaibdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zp30slbsv"/><path class="primary u5_aaibdn"/></g>`,
		"fallback": "iconaut:chess-queen-duotone",
	});
}

export default Component;

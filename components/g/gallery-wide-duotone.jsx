import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmzz96bmf.css';
import '../../css/o/o57sxb6nv.css';
import '../../css/r/r8pl9hbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mmzz96bmf"/><path clip-rule="evenodd" class="o57sxb6nv"/><path class="r8pl9hbsw"/></g>`,
		"fallback": "reicon:gallery-wide-duotone",
	});
}

export default Component;

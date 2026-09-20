import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/g/gzh4heaoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path clip-rule="evenodd" class="gzh4heaoq"/></g>`,
		"fallback": "solar:calculator-minimalistic-bold-duotone",
	});
}

export default Component;

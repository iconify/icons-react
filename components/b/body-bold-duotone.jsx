import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xuqb8zbwf.css';
import '../../css/z/zg-snbaep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xuqb8zbwf"/><path class="zg-snbaep"/></g>`,
		"fallback": "solar:body-bold-duotone",
	});
}

export default Component;

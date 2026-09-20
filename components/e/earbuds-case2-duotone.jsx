import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h5rch0bsa.css';
import '../../css/c/cr_pebbwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h5rch0bsa"/><path class="cr_pebbwv"/></g>`,
		"fallback": "reicon:earbuds-case2-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urxe3rcyy.css';
import '../../css/x/x0o1olbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="urxe3rcyy"/><path class="x0o1olbsv"/></g>`,
		"fallback": "solar:alt-arrow-up-bold-duotone",
	});
}

export default Component;

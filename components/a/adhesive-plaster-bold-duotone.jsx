import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkgvjbbfd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/lkzock2wt.css';
import '../../css/p/p4n3pmbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bkgvjbbfd"/><g class="mc2zb0bvp"><path class="lkzock2wt"/><path class="p4n3pmbrj"/></g></g>`,
		"fallback": "solar:adhesive-plaster-bold-duotone",
	});
}

export default Component;

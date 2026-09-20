import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k1frm1ouf.css';
import '../../css/a/asst68b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k1frm1ouf"/><path class="asst68b2a"/></g>`,
		"fallback": "pixelarticons:angry-sharp",
	});
}

export default Component;

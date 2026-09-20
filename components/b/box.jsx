import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6u1wo_6n.css';
import '../../css/o/om0k6ebgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f6u1wo_6n"/><path class="om0k6ebgu"/></g>`,
		"fallback": "pixelarticons:box",
	});
}

export default Component;

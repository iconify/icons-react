import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6t4l0b5i.css';
import '../../css/t/tt7zpdcyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x6t4l0b5i"/><path class="tt7zpdcyl"/></g>`,
		"fallback": "coolicons:bath-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mcno18bmy.css';
import '../../css/i/i92g2uadp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mcno18bmy"/><path class="i92g2uadp"/></g>`,
		"fallback": "solar:chevrons-left-right-bold",
	});
}

export default Component;

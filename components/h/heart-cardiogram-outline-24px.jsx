import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8__icc1a.css';
import '../../css/m/mdq2hy1_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8__icc1a"/><path class="mdq2hy1_x"/></g>`,
		"fallback": "healthicons:heart-cardiogram-outline-24px",
	});
}

export default Component;

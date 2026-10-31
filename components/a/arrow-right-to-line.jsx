import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bb09cdc1r.css';
import '../../css/j/jexyzqygz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bb09cdc1r"/><path class="jexyzqygz"/></g>`,
		"fallback": "withicons-retro:arrow-right-to-line",
	});
}

export default Component;

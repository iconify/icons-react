import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1sojsb3n.css';
import '../../css/t/tyt1h6b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h1sojsb3n"/><path class="tyt1h6b2y"/></g>`,
		"fallback": "tabler:chart-area-line-filled",
	});
}

export default Component;

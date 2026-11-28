import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uq-jpdo8g.css';
import '../../css/s/sajlbtwqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uq-jpdo8g"/><path class="primary sajlbtwqa"/></g>`,
		"fallback": "iconaut:ghost-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whx60eb6n.css';
import '../../css/q/qwlt0kpsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary whx60eb6n"/><path class="primary qwlt0kpsa"/></g>`,
		"fallback": "iconaut:fern-duotone",
	});
}

export default Component;

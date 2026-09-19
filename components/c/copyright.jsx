import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u54-jsiso.css';
import '../../css/y/yk60_vm2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u54-jsiso"/><path class="yk60_vm2p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:copyright",
	});
}

export default Component;

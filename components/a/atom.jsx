import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mac0w8brc.css';
import '../../css/i/i0l9gyb3p.css';
import '../../css/z/zrlh-6b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mac0w8brc"/><path class="i0l9gyb3p"/><path class="zrlh-6b7n"/></g>`,
		"fallback": "iconaut:atom",
	});
}

export default Component;

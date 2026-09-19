import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m-n68mb4o.css';
import '../../css/u/uhl4d3c0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="m-n68mb4o"/><path class="uhl4d3c0n"/></g>`,
		"fallback": "icon-park-outline:child-with-pacifier",
	});
}

export default Component;

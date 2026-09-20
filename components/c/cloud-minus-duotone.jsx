import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9siqcb1a.css';
import '../../css/g/gc4_d1bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j9siqcb1a"/><path clip-rule="evenodd" class="gc4_d1bpo"/></g>`,
		"fallback": "reicon:cloud-minus-duotone",
	});
}

export default Component;

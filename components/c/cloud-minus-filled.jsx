import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gc4_d1bpo.css';
import '../../css/d/dum8-7_9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gc4_d1bpo"/><path class="dum8-7_9t"/></g>`,
		"fallback": "reicon:cloud-minus-filled",
	});
}

export default Component;

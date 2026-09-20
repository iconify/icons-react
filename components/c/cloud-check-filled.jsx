import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gq4-rbb6g.css';
import '../../css/d/dum8-7_9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gq4-rbb6g"/><path class="dum8-7_9t"/></g>`,
		"fallback": "reicon:cloud-check-filled",
	});
}

export default Component;

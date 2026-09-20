import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cntc9ylgg.css';
import '../../css/d/dlrsrzbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cntc9ylgg"/><path clip-rule="evenodd" class="dlrsrzbam"/></g>`,
		"fallback": "reicon:bag4",
	});
}

export default Component;

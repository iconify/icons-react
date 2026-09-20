import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qvjb-cb1d.css';
import '../../css/n/nknbjsh0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qvjb-cb1d"/><path class="nknbjsh0v"/></g>`,
		"fallback": "reicon:cloud-upload",
	});
}

export default Component;

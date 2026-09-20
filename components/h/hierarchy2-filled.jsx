import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qggzxsa_w.css';
import '../../css/v/vou97ub7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qggzxsa_w"/><path class="vou97ub7r"/></g>`,
		"fallback": "reicon:hierarchy2-filled",
	});
}

export default Component;

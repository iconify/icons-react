import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn29b8bnl.css';
import '../../css/q/qx7mf946g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vn29b8bnl"/><path class="qx7mf946g"/></g>`,
		"fallback": "reicon:code-duotone",
	});
}

export default Component;

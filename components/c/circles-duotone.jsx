import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pys0i3bjn.css';
import '../../css/x/x3p-fkbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pys0i3bjn"/><path class="x3p-fkbgj"/></g>`,
		"fallback": "keyline-icons:circles-duotone",
	});
}

export default Component;

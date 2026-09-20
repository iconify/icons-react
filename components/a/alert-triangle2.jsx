import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjjlq597h.css';
import '../../css/c/cujznwl8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xjjlq597h"/><path clip-rule="evenodd" class="cujznwl8q"/></g>`,
		"fallback": "reicon:alert-triangle2",
	});
}

export default Component;

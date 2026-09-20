import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ri0jxrb-t.css';
import '../../css/q/qd8025r3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ri0jxrb-t"/><path clip-rule="evenodd" class="qd8025r3t"/></g>`,
		"fallback": "reicon:ghost-smile",
	});
}

export default Component;

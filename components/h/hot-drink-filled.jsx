import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgus1mbjd.css';
import '../../css/c/c_1ykbblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgus1mbjd"/><path class="c_1ykbblh"/></g>`,
		"fallback": "reicon:hot-drink-filled",
	});
}

export default Component;

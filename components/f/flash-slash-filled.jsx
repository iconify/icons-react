import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvkmt5bkh.css';
import '../../css/g/g5oj54bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvkmt5bkh"/><path class="g5oj54bzy"/></g>`,
		"fallback": "reicon:flash-slash-filled",
	});
}

export default Component;

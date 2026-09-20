import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vro9qcced.css';
import '../../css/t/txkmvrbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vro9qcced"/><path clip-rule="evenodd" class="txkmvrbjw"/></g>`,
		"fallback": "reicon:alarm-clock",
	});
}

export default Component;

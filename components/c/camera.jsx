import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w4llcyzjp.css';
import '../../css/y/yu0smp5wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="w4llcyzjp"/><path class="yu0smp5wt"/></g>`,
		"fallback": "matita:camera",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wumap5bqq.css';
import '../../css/j/j246-ubvw.css';
import '../../css/p/pmwq_pb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wumap5bqq"/><path clip-rule="evenodd" class="j246-ubvw"/><path class="pmwq_pb3o"/></g>`,
		"fallback": "reicon:battery-full2",
	});
}

export default Component;

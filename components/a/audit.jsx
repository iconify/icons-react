import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jggl5lblz.css';
import '../../css/f/f1r26vbpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jggl5lblz"/><path class="f1r26vbpu"/></g>`,
		"fallback": "icon-park-solid:audit",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/op3inpbug.css';
import '../../css/p/puckv5bwn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="op3inpbug"/><path clip-rule="evenodd" class="puckv5bwn"/></g>`,
		"fallback": "icon-park-solid:hand-up",
	});
}

export default Component;

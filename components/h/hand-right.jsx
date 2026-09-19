import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/ifzuak1gc.css';
import '../../css/n/nts83s09d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ifzuak1gc"/><path clip-rule="evenodd" class="nts83s09d"/></g>`,
		"fallback": "icon-park-solid:hand-right",
	});
}

export default Component;

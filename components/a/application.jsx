import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rwpjs6wpq.css';
import '../../css/b/bo5xk0b7l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rwpjs6wpq"/><path class="bo5xk0b7l"/></g>`,
		"fallback": "icon-park-solid:application",
	});
}

export default Component;

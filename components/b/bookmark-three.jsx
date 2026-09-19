import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rf5x0l6rm.css';
import '../../css/b/b3c2jhbey.css';
import '../../css/d/dif4nrblo.css';
import '../../css/q/qgwr9vbgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rf5x0l6rm"/><path class="b3c2jhbey"/><path class="dif4nrblo"/><path class="qgwr9vbgn"/></g>`,
		"fallback": "icon-park-outline:bookmark-three",
	});
}

export default Component;

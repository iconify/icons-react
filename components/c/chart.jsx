import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/n/nl36872ts.css';
import '../../css/q/q1zk5yb4k.css';
import '../../css/h/h83h59bcb.css';
import '../../css/c/ccxrws8zy.css';
import '../../css/w/wb38q66tp.css';
import '../../css/s/sf0wytb7x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><rect class="nl36872ts"/><path class="q1zk5yb4k"/><path class="h83h59bcb"/><path class="ccxrws8zy"/><path class="wb38q66tp"/><path class="sf0wytb7x"/></g>`,
		"fallback": "gala:chart",
	});
}

export default Component;

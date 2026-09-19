import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dntv8iduu.css';
import '../../css/a/ax2murb2d.css';
import '../../css/q/qg-fvrb0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dntv8iduu"/><path class="ax2murb2d"/><path class="qg-fvrb0k"/></g>`,
		"fallback": "icon-park-outline:entertainment",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sfl-a4zyf.css';
import '../../css/v/v5nnxhboa.css';
import '../../css/g/g_ewu02wb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sfl-a4zyf"/><rect class="v5nnxhboa"/><path class="g_ewu02wb"/></g>`,
		"fallback": "icon-park-outline:airplane-window-one",
	});
}

export default Component;

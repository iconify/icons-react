import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i-81h6bnx.css';
import '../../css/y/yduyyjumo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="i-81h6bnx"/><path class="yduyyjumo"/></g>`,
		"fallback": "icon-park-solid:clue",
	});
}

export default Component;

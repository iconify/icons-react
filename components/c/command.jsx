import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f84ytrb9b.css';
import '../../css/w/wuekglbtb.css';
import '../../css/n/nr88iab2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="f84ytrb9b"/><path class="wuekglbtb"/><path class="nr88iab2w"/></g>`,
		"fallback": "icon-park-outline:command",
	});
}

export default Component;

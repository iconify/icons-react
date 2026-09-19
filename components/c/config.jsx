import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nfncz0b5x.css';
import '../../css/l/llqfild5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="nfncz0b5x"/><path class="llqfild5y"/></g>`,
		"fallback": "icon-park-outline:config",
	});
}

export default Component;

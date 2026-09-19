import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_6nlzbtv.css';
import '../../css/s/s-wmb8j5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r_6nlzbtv"/><path class="s-wmb8j5z"/></g>`,
		"fallback": "icon-park-outline:bus",
	});
}

export default Component;

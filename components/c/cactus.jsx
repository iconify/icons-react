import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ohzyaebtv.css';
import '../../css/d/ds9ux5m3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ohzyaebtv"/><path class="ds9ux5m3n"/></g>`,
		"fallback": "icon-park-outline:cactus",
	});
}

export default Component;

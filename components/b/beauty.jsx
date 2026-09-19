import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pcls6pban.css';
import '../../css/c/ccfx3ebrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pcls6pban"/><path class="ccfx3ebrc"/></g>`,
		"fallback": "icon-park:beauty",
	});
}

export default Component;

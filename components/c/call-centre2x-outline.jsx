import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x75_jfg6x.css';
import '../../css/v/vralhqbll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x75_jfg6x"/><path clip-rule="evenodd" class="vralhqbll"/></g>`,
		"fallback": "healthicons:call-centre2x-outline",
	});
}

export default Component;

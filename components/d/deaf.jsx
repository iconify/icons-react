import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k4ga_ur6o.css';
import '../../css/s/s340mk47s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k4ga_ur6o"/><path class="s340mk47s"/></g>`,
		"fallback": "healthicons:deaf",
	});
}

export default Component;

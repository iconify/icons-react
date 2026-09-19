import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gav5zf6zs.css';
import '../../css/f/f_mns8wxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gav5zf6zs"/><path class="f_mns8wxa"/></g>`,
		"fallback": "healthicons:asthma",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yzz3ksnvr.css';
import '../../css/y/y7bzc5ior.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="yzz3ksnvr"/><path class="y7bzc5ior"/></g>`,
		"fallback": "icon-park:hold",
	});
}

export default Component;

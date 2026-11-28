import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pn8kspq0e.css';
import '../../css/k/k6fjl-mir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pn8kspq0e secondary"/><path class="k6fjl-mir primary"/></g>`,
		"fallback": "iconaut:garage-duotone",
	});
}

export default Component;

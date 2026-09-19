import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drn2ptbym.css';
import '../../css/g/g1s-k3b8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="drn2ptbym"/><path clip-rule="evenodd" class="g1s-k3b8g"/></g>`,
		"fallback": "healthicons:cholera",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejjbf4g2r.css';
import '../../css/d/dhd8s--ip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejjbf4g2r"/><path clip-rule="evenodd" class="dhd8s--ip"/></g>`,
		"fallback": "healthicons:animal-snake2x-outline",
	});
}

export default Component;

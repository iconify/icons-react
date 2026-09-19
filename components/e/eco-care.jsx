import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v2-rbeb8t.css';
import '../../css/q/qaohmrikg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v2-rbeb8t"/><path clip-rule="evenodd" class="qaohmrikg"/></g>`,
		"fallback": "healthicons:eco-care",
	});
}

export default Component;

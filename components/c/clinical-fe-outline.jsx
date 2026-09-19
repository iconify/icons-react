import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qd864cc8t.css';
import '../../css/m/mup1tem7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qd864cc8t"/><path clip-rule="evenodd" class="mup1tem7t"/></g>`,
		"fallback": "healthicons:clinical-fe-outline",
	});
}

export default Component;

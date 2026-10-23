import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jc7j2gb8e.css';
import '../../css/v/vakoxcn_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jc7j2gb8e"/><path class="vakoxcn_p"/></g>`,
		"fallback": "healthicons:high-temp",
	});
}

export default Component;

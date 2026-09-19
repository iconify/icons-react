import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tmzazb0ui.css';
import '../../css/o/of1v6965n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tmzazb0ui"/><path class="of1v6965n"/></g>`,
		"fallback": "healthicons:female-sex-worker2x-outline",
	});
}

export default Component;

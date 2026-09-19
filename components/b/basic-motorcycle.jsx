import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbacahqvl.css';
import '../../css/u/utbpy0v5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wbacahqvl"/><path class="utbpy0v5e"/></g>`,
		"fallback": "healthicons:basic-motorcycle",
	});
}

export default Component;

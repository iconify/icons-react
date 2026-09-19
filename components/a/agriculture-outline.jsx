import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1-ktetnq.css';
import '../../css/j/j4av9gb_e.css';
import '../../css/d/dn453zvfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a1-ktetnq"/><path clip-rule="evenodd" class="j4av9gb_e"/><path class="dn453zvfx"/></g>`,
		"fallback": "healthicons:agriculture-outline",
	});
}

export default Component;

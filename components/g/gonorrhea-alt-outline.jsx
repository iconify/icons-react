import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uyu22ac-b.css';
import '../../css/o/ou4_wub3x.css';
import '../../css/o/odpiibnui.css';
import '../../css/w/w9jf0vajj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uyu22ac-b"/><path clip-rule="evenodd" class="ou4_wub3x"/><path clip-rule="evenodd" class="odpiibnui"/><path class="w9jf0vajj"/></g>`,
		"fallback": "healthicons:gonorrhea-alt-outline",
	});
}

export default Component;

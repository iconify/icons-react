import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h7j36grko.css';
import '../../css/f/f86udbbwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h7j36grko"/><path class="f86udbbwb"/></g>`,
		"fallback": "healthicons:back-pain",
	});
}

export default Component;

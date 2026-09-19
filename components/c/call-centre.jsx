import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2wth9bxr.css';
import '../../css/i/iefpg1wzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i2wth9bxr"/><path class="iefpg1wzw"/></g>`,
		"fallback": "healthicons:call-centre",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xk_t-s26g.css';
import '../../css/y/yzptmubja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xk_t-s26g"/><path clip-rule="evenodd" class="yzptmubja"/></g>`,
		"fallback": "healthicons:calm",
	});
}

export default Component;

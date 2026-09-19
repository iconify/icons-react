import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnsm5kdaf.css';
import '../../css/c/c9yhn8fgx.css';
import '../../css/r/ru576oa1k.css';
import '../../css/x/x_u2gpj0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lnsm5kdaf"/><path class="c9yhn8fgx"/><path clip-rule="evenodd" class="ru576oa1k"/><path class="x_u2gpj0m"/></g>`,
		"fallback": "healthicons:blood-rh-p",
	});
}

export default Component;

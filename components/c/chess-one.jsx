import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r828l5b8c.css';
import '../../css/e/ept_tj7oo.css';
import '../../css/c/cy8y98b1l.css';
import '../../css/k/k_xqplfzx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r828l5b8c"/><path class="ept_tj7oo"/><path class="cy8y98b1l"/><path class="k_xqplfzx"/></g>`,
		"fallback": "icon-park-outline:chess-one",
	});
}

export default Component;

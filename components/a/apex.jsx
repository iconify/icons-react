import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dt4is2b2d.css';
import '../../css/c/ce7r36b6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dt4is2b2d"/><path class="ce7r36b6y"/></g>`,
		"fallback": "cryptocurrency-color:apex",
	});
}

export default Component;

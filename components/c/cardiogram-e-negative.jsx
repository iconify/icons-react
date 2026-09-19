import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upt6vgbkc.css';
import '../../css/n/n8yd7w-5u.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCardiogramENegative0)" class="cuyn6tgcc"><path class="upt6vgbkc"/><path clip-rule="evenodd" class="n8yd7w-5u"/></g><defs><clipPath id="healthiconsCardiogramENegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:cardiogram-e-negative",
	});
}

export default Component;

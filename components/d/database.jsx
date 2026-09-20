import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/n/nz3pocc6v.css';
import '../../css/y/yvmj5ab_p.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="nz3pocc6v"/><path class="yvmj5ab_p"/></g>`,
		"fallback": "system-uicons:database",
	});
}

export default Component;

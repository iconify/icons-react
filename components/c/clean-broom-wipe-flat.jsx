import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pdty8wbtb.css';
import '../../css/c/co-7rks-c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pdty8wbtb"/><path class="co-7rks-c"/></g>`,
		"fallback": "streamline-flex-color:clean-broom-wipe-flat",
	});
}

export default Component;

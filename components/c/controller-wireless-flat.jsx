import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkk_n36ub.css';
import '../../css/b/b4-a2oq6q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkk_n36ub"/><path clip-rule="evenodd" class="b4-a2oq6q"/></g>`,
		"fallback": "streamline-flex-color:controller-wireless-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shsce1bzv.css';
import '../../css/d/dmuj08biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="shsce1bzv"/><path clip-rule="evenodd" class="dmuj08biq"/></g>`,
		"fallback": "lets-icons:done-all-alt-round-light",
	});
}

export default Component;

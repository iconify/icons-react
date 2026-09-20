import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0f0bfcuy.css';
import '../../css/m/mgmc-wmea.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a0f0bfcuy"/><path clip-rule="evenodd" class="mgmc-wmea"/></g>`,
		"fallback": "streamline-color:airport-plane-transit-flat",
	});
}

export default Component;

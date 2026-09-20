import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz42h1bsp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz42h1bsp"/>`,
		"fallback": "pinhead:castle-gate-with-battlements-and-spires",
	});
}

export default Component;

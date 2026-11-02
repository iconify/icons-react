import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bex7p4bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bex7p4bgl"/>`,
		"fallback": "mingcute:carplay-line",
	});
}

export default Component;

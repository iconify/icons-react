import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbaak6e_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbaak6e_e"/>`,
		"fallback": "mingcute:backpack-fill",
	});
}

export default Component;

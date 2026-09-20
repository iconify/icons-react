import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp0j7gbhl.css';
import '../../css/c/cmyso5bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lp0j7gbhl"/><path class="cmyso5bjt"/>`,
		"fallback": "mingcute:campfire-fill",
	});
}

export default Component;

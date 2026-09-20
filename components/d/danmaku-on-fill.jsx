import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/ximv8ihgl.css';
import '../../css/p/pl259k1fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ximv8ihgl"/><path class="pl259k1fn"/>`,
		"fallback": "mingcute:danmaku-on-fill",
	});
}

export default Component;

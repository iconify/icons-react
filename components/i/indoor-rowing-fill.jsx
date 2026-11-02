import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xumdxw0gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xumdxw0gs"/>`,
		"fallback": "mingcute:indoor-rowing-fill",
	});
}

export default Component;

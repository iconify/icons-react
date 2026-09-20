import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj25hbbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj25hbbcy"/>`,
		"fallback": "mingcute:direction-dot-fill",
	});
}

export default Component;

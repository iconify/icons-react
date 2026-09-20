import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf243ixuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wf243ixuw"/>`,
		"fallback": "mingcute:building-6-fill",
	});
}

export default Component;

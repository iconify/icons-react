import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbb6-l2kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbb6-l2kn"/>`,
		"fallback": "mingcute:emoji-2-line",
	});
}

export default Component;

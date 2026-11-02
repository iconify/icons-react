import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfk2hn2kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfk2hn2kh"/>`,
		"fallback": "mingcute:bridge-2-fill",
	});
}

export default Component;

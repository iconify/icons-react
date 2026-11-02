import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyt_8j3vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyt_8j3vn"/>`,
		"fallback": "mingcute:delete-3-fill",
	});
}

export default Component;

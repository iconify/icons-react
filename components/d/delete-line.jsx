import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjgk6__av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjgk6__av"/>`,
		"fallback": "mingcute:delete-line",
	});
}

export default Component;

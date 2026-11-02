import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj_7z6yeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj_7z6yeh"/>`,
		"fallback": "mingcute:ice-cream-line",
	});
}

export default Component;

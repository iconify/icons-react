import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjg30ubwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjg30ubwy"/>`,
		"fallback": "mingcute:cursor-2-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wudtcpqfk.css';
import '../../css/v/v27-w6bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wudtcpqfk"/><path class="v27-w6bwt"/>`,
		"fallback": "mingcute:dots-vertical-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uajmqcs3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uajmqcs3g"/>`,
		"fallback": "mingcute:board-fill",
	});
}

export default Component;

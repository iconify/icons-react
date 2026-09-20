import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcpry4u-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tcpry4u-q"/>`,
		"fallback": "solar:clock-circle-bold",
	});
}

export default Component;

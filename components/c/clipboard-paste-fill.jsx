import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh6wegb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh6wegb1j"/>`,
		"fallback": "mingcute:clipboard-paste-fill",
	});
}

export default Component;

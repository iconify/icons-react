import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxbgy5bzx.css';
import '../../css/l/l_-go266m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxbgy5bzx"/><path class="l_-go266m"/>`,
		"fallback": "boxicons:arrow-in-up-left-stroke-circle-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc17l7bwn.css';
import '../../css/n/ns3pdubbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc17l7bwn"/><path class="ns3pdubbz"/>`,
		"fallback": "boxicons:arrow-in-up-left-stroke-square",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rty2h_9ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rty2h_9ss"/>`,
		"fallback": "mage:battery-dead-fill",
	});
}

export default Component;

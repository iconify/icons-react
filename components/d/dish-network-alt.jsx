import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhmh6qbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhmh6qbmy"/>`,
		"fallback": "cbi:dish-network-alt",
	});
}

export default Component;

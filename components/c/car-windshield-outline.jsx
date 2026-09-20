import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnfrwof5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnfrwof5l"/>`,
		"fallback": "mdi:car-windshield-outline",
	});
}

export default Component;

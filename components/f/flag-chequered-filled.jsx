import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w25h46bvy.css';
import '../../css/f/fuqf47bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w25h46bvy"/><path class="fuqf47bsi"/>`,
		"fallback": "boxicons:flag-chequered-filled",
	});
}

export default Component;

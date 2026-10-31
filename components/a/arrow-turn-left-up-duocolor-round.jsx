import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksutv4lbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksutv4lbr"/>`,
		"fallback": "coolicons:arrow-turn-left-up-duocolor-round",
	});
}

export default Component;

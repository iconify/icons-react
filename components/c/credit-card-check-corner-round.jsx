import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqd7_actr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqd7_actr"/>`,
		"fallback": "coolicons:credit-card-check-corner-round",
	});
}

export default Component;

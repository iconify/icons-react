import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knlvkn1xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knlvkn1xk"/>`,
		"fallback": "ri:brain-ai-3-line",
	});
}

export default Component;

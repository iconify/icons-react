import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzm-09bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzm-09bli"/>`,
		"fallback": "ri:camera-ai-line",
	});
}

export default Component;

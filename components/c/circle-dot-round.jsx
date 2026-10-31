import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc9chccvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc9chccvp"/>`,
		"fallback": "coolicons:circle-dot-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na7q4z2mn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na7q4z2mn"/>`,
		"fallback": "garden:history-stroke-12",
	});
}

export default Component;

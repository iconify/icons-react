import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuqh2nb0t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuqh2nb0t"/>`,
		"fallback": "garden:bot-sparkle-stroke-12",
	});
}

export default Component;

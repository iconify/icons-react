import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smlwvlmfy.css';
import '../../css/n/ntge0rvwd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smlwvlmfy"/><path class="ntge0rvwd"/>`,
		"fallback": "energy-icons:electric-arc-furnace-20-bold",
	});
}

export default Component;

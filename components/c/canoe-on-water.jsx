import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9_9asb3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9_9asb3z"/>`,
		"fallback": "pinhead:canoe-on-water",
	});
}

export default Component;

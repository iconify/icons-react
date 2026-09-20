import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f012s1pie.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f012s1pie"/>`,
		"fallback": "pinhead:campsite-with-canoe",
	});
}

export default Component;

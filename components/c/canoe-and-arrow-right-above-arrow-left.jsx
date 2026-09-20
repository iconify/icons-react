import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg_1uzbbc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg_1uzbbc"/>`,
		"fallback": "pinhead:canoe-and-arrow-right-above-arrow-left",
	});
}

export default Component;

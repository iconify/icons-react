import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqh2ic0-h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqh2ic0-h"/>`,
		"fallback": "pinhead:bear-spray-can-with-spray-and-rupee",
	});
}

export default Component;

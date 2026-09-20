import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukvxj4v6o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukvxj4v6o"/>`,
		"fallback": "pinhead:cairn-and-two-tall-rectangles-top-left",
	});
}

export default Component;

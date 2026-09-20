import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hglly4p7b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hglly4p7b"/>`,
		"fallback": "streamline-block:content-star",
	});
}

export default Component;

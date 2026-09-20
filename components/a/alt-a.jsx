import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb7vipbym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb7vipbym"/>`,
		"fallback": "vaadin:alt-a",
	});
}

export default Component;

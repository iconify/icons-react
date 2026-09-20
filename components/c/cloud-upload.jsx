import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm9dyvuut.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm9dyvuut"/>`,
		"fallback": "vaadin:cloud-upload",
	});
}

export default Component;

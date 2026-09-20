import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6-cffb6m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6-cffb6m"/>`,
		"fallback": "vaadin:folder-o",
	});
}

export default Component;

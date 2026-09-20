import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omqko8dhf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omqko8dhf"/>`,
		"fallback": "vaadin:boat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk0-2pbjn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk0-2pbjn"/>`,
		"fallback": "vaadin:header",
	});
}

export default Component;

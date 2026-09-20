import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dadjwxblk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dadjwxblk"/>`,
		"fallback": "vaadin:calc-book",
	});
}

export default Component;

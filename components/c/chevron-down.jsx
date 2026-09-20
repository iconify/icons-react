import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd0piybon.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd0piybon"/>`,
		"fallback": "vaadin:chevron-down",
	});
}

export default Component;

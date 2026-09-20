import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfto5fbzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfto5fbzw"/>`,
		"fallback": "vaadin:caret-down",
	});
}

export default Component;

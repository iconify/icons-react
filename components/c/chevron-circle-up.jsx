import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7g66kriq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7g66kriq"/>`,
		"fallback": "vaadin:chevron-circle-up",
	});
}

export default Component;

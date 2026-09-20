import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekufx7jer.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekufx7jer"/>`,
		"fallback": "vaadin:align-right",
	});
}

export default Component;

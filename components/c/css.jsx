import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq_mswi8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq_mswi8f"/>`,
		"fallback": "vaadin:css",
	});
}

export default Component;

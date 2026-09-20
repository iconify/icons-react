import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdd_2cbom.css';
import '../../css/e/e-z6fbc7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdd_2cbom"/><path class="e-z6fbc7o"/>`,
		"fallback": "vaadin:book-percent",
	});
}

export default Component;

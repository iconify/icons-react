import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nthw-y6ne.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nthw-y6ne"/>`,
		"fallback": "vaadin:car",
	});
}

export default Component;

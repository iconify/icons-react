import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxrevhb3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxrevhb3c"/>`,
		"fallback": "garden:chevron-left-fill-16",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co36qraxx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co36qraxx"/>`,
		"fallback": "bi:filter-circle-fill",
	});
}

export default Component;

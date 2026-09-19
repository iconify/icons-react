import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e28aaibcs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e28aaibcs"/>`,
		"fallback": "bi:7-circle-fill",
	});
}

export default Component;

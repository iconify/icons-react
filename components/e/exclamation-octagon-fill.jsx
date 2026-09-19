import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yda77z6gr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yda77z6gr"/>`,
		"fallback": "bi:exclamation-octagon-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti-29ubjh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti-29ubjh"/>`,
		"fallback": "bi:bookmark-heart-fill",
	});
}

export default Component;

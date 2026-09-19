import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3unwibut.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3unwibut"/>`,
		"fallback": "bi:chevron-bar-expand",
	});
}

export default Component;

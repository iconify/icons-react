import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4qybgd0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4qybgd0h"/>`,
		"fallback": "bi:handbag-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgfo6gb0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgfo6gb0h"/>`,
		"fallback": "bi:brightness-alt-low-fill",
	});
}

export default Component;

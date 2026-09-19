import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rym_yu0mt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rym_yu0mt"/>`,
		"fallback": "bi:gift-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmz5xyl5g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmz5xyl5g"/>`,
		"fallback": "bi:arrow-through-heart-fill",
	});
}

export default Component;

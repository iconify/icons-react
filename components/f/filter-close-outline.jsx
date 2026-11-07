import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erhfpqflh.css';
import '../../css/r/r8c016bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erhfpqflh"/><path class="r8c016bvp"/>`,
		"fallback": "solar:filter-close-outline",
	});
}

export default Component;

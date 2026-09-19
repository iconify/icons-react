import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp60f-90o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp60f-90o"/>`,
		"fallback": "bi:graph-up",
	});
}

export default Component;

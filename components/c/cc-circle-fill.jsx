import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4p9qeb4g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4p9qeb4g"/>`,
		"fallback": "bi:cc-circle-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6231zisq.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6231zisq"/>`,
		"fallback": "topcoat:bookmark",
	});
}

export default Component;

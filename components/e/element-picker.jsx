import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5qe6qp3w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5qe6qp3w"/>`,
		"fallback": "carbon:element-picker",
	});
}

export default Component;

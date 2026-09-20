import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-0lbqb6s.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-0lbqb6s"/>`,
		"fallback": "picon:headphone",
	});
}

export default Component;

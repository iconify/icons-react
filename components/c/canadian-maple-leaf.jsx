import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejor03bct.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejor03bct"/>`,
		"fallback": "la:canadian-maple-leaf",
	});
}

export default Component;

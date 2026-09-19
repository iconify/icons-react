import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6qqvlb9x.css';

const viewBox = {"width":700,"height":677};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6qqvlb9x"/>`,
		"fallback": "ls:checkbox",
	});
}

export default Component;

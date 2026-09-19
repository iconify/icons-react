import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atlhr3t3w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atlhr3t3w"/>`,
		"fallback": "fa7-brands:hire-a-helper",
	});
}

export default Component;

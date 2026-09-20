import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd8qvabnr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd8qvabnr"/>`,
		"fallback": "lsicon:amount-up-two-outline",
	});
}

export default Component;

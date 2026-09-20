import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfur5nbvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfur5nbvo"/>`,
		"fallback": "lsicon:double-arrow-up-outline",
	});
}

export default Component;

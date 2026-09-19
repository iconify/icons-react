import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnax8dbwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnax8dbwd"/>`,
		"fallback": "famicons:checkmark-sharp",
	});
}

export default Component;

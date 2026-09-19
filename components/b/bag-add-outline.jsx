import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-g0x1_9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-g0x1_9e"/>`,
		"fallback": "famicons:bag-add-outline",
	});
}

export default Component;

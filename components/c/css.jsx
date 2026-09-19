import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-tbedc8u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-tbedc8u"/>`,
		"fallback": "bi:css",
	});
}

export default Component;

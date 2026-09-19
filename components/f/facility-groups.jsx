import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd91mzb1e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd91mzb1e"/>`,
		"fallback": "carbon:facility-groups",
	});
}

export default Component;

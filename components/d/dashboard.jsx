import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w86rhlbvt.css';

const viewBox = {"width":717,"height":646};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w86rhlbvt"/>`,
		"fallback": "ls:dashboard",
	});
}

export default Component;

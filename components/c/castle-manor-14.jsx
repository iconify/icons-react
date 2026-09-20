import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt-67stkd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt-67stkd"/>`,
		"fallback": "osmic:castle-manor-14",
	});
}

export default Component;

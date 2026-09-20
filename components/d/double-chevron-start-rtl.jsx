import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r373sfpnt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r373sfpnt"/>`,
		"fallback": "ooui:double-chevron-start-rtl",
	});
}

export default Component;

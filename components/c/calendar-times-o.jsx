import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl1alsbhu.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl1alsbhu"/>`,
		"fallback": "fa:calendar-times-o",
	});
}

export default Component;

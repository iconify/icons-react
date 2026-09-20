import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auypmabvh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auypmabvh"/>`,
		"fallback": "ooui:help-notice-filled-rtl",
	});
}

export default Component;

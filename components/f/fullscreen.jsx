import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhah0tblr.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhah0tblr"/>`,
		"fallback": "system-uicons:fullscreen",
	});
}

export default Component;

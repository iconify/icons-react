import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sudg71c6u.css';
import '../../css/l/l39i1pkyb.css';
import '../../css/c/cgvibbbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sudg71c6u wm-shadow"/><path class="l39i1pkyb wm-shadow"/><path class="cgvibbbrh"/></g>`,
		"fallback": "withicons-brutal:anchor",
	});
}

export default Component;

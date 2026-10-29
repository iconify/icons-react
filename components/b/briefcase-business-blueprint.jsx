import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/abfaitbwy.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/g/gs99q5biw.css';
import '../../css/d/dokvecbou.css';
import '../../css/n/n54uxubxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="abfaitbwy wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="gs99q5biw wm-k"/><path class="dokvecbou wm-a"/><path class="n54uxubxn wm-s"/></g>`,
		"fallback": "withicons:briefcase-business-blueprint",
	});
}

export default Component;

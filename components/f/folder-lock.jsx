import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/z/z5gxc3bbu.css';
import '../../css/x/xuj85wbkw.css';
import '../../css/d/d37966b6e.css';
import '../../css/q/q1c-wrbbt.css';
import '../../css/d/dcd4-sy0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="z5gxc3bbu"/><path class="xuj85wbkw"/><path class="d37966b6e"/><path class="q1c-wrbbt"/><path class="dcd4-sy0f"/></g>`,
		"fallback": "withicons-retro:folder-lock",
	});
}

export default Component;

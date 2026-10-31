import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f6nre5nml.css';
import '../../css/a/a3kw8m73f.css';
import '../../css/t/t9ut4qrjg.css';
import '../../css/a/azstbc_xy.css';
import '../../css/o/o1la71bpg.css';
import '../../css/p/pkxkv_w8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f6nre5nml wm-shadow"/><path class="a3kw8m73f"/><path class="t9ut4qrjg"/><path class="azstbc_xy"/><path class="o1la71bpg"/><path class="pkxkv_w8g"/></g>`,
		"fallback": "withicons-retro:book-open",
	});
}

export default Component;

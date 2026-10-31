import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au6hhft4u.css';
import '../../css/g/gomb-26qh.css';
import '../../css/b/bf3uyq84n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="au6hhft4u wm-k"/><path class="gomb-26qh wm-shine"/><path class="bf3uyq84n wm-shine"/></g>`,
		"fallback": "withicons-lunar:id-card",
	});
}

export default Component;

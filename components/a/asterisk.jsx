import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j5qqge4bo.css';
import '../../css/u/uppxbxbjq.css';
import '../../css/x/xeziup3uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j5qqge4bo"/><path class="uppxbxbjq"/><path class="xeziup3uu"/></g>`,
		"fallback": "iconaut:asterisk",
	});
}

export default Component;

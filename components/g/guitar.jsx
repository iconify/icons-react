import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wf9lekb8b.css';
import '../../css/p/prqshyb1g.css';
import '../../css/d/devv44bfd.css';
import '../../css/x/xjqyizgxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wf9lekb8b wm-shadow"/><path class="prqshyb1g wm-shadow"/><path class="devv44bfd"/><path class="xjqyizgxw"/></g>`,
		"fallback": "withicons-brutal:guitar",
	});
}

export default Component;

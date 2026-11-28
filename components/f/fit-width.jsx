import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f1apohbqu.css';
import '../../css/e/e8mk_9b-m.css';
import '../../css/j/jvph1bc6b.css';
import '../../css/n/n-es2fbvh.css';
import '../../css/v/vbf036qoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f1apohbqu"/><path class="e8mk_9b-m"/><path class="jvph1bc6b"/><path class="n-es2fbvh"/><path class="vbf036qoo"/></g>`,
		"fallback": "iconaut:fit-width",
	});
}

export default Component;

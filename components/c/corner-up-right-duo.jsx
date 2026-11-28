import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/amlbbgrmg.css';
import '../../css/z/zwcgcri8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="amlbbgrmg"/><path class="zwcgcri8q"/></g>`,
		"fallback": "iconaut:corner-up-right-duo",
	});
}

export default Component;

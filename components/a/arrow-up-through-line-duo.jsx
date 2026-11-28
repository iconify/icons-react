import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i3-29jb8c.css';
import '../../css/g/g25wxlbyx.css';
import '../../css/d/dvfmgjbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i3-29jb8c"/><path class="g25wxlbyx"/><path class="dvfmgjbui"/></g>`,
		"fallback": "iconaut:arrow-up-through-line-duo",
	});
}

export default Component;

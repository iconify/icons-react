import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bx22elb0t.css';
import '../../css/l/l7hat5ags.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bx22elb0t"/><path class="l7hat5ags"/></g>`,
		"fallback": "iconaut:inbox",
	});
}

export default Component;

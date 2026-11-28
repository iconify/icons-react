import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mhc6tqb3t.css';
import '../../css/a/a8gn8gqmq.css';
import '../../css/l/li69sw6ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mhc6tqb3t"/><path class="a8gn8gqmq"/><path class="li69sw6ia"/></g>`,
		"fallback": "iconaut:arrow-up-right-down-left-duo",
	});
}

export default Component;

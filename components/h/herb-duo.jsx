import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-s_idbem.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q36e61bjs.css';
import '../../css/n/noi10wr0r.css';
import '../../css/p/pkt7jgc9g.css';
import '../../css/v/v3yuoz4dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-s_idbem secondary"/><g class="dt0cm9dhy primary"><path class="q36e61bjs"/><path class="noi10wr0r"/><path class="pkt7jgc9g"/><path class="v3yuoz4dp"/></g>`,
		"fallback": "iconaut:herb-duo",
	});
}

export default Component;

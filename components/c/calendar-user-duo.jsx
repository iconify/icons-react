import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iivyk3ixn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k4-c7ob6h.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/h/h84pf6b7c.css';
import '../../css/c/cjqev4bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iivyk3ixn secondary"/><g class="dt0cm9dhy primary"><path class="k4-c7ob6h"/><path class="w7_mhrwuu"/><path class="h84pf6b7c"/><path class="cjqev4bed"/></g>`,
		"fallback": "iconaut:calendar-user-duo",
	});
}

export default Component;

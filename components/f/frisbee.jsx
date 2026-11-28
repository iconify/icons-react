import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p2uslcb4q.css';
import '../../css/p/pv5w52brh.css';
import '../../css/y/yz1e5bbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p2uslcb4q"/><path class="pv5w52brh"/><path class="yz1e5bbsr"/></g>`,
		"fallback": "iconaut:frisbee",
	});
}

export default Component;

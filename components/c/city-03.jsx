import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jq-3slbet.css';
import '../../css/s/sz_usq7_r.css';
import '../../css/h/h1r8nnbkq.css';
import '../../css/e/ei_u-vbhn.css';
import '../../css/h/hygriac9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jq-3slbet"/><path class="sz_usq7_r"/><ellipse class="h1r8nnbkq"/><path class="ei_u-vbhn"/><path class="hygriac9q"/></g>`,
		"fallback": "hugeicons:city-03",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h-on7_bwh.css';
import '../../css/y/yv2pfo4sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h-on7_bwh"/><path class="yv2pfo4sl"/></g>`,
		"fallback": "hugeicons:configuration-01",
	});
}

export default Component;

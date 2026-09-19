import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bxy031bkd.css';
import '../../css/s/s7l_ijfrk.css';
import '../../css/o/oo6cd_9qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bxy031bkd"/><path class="s7l_ijfrk"/><path class="oo6cd_9qe"/></g>`,
		"fallback": "hugeicons:award-05",
	});
}

export default Component;

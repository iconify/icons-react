import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-q4fxgbt.css';
import '../../css/t/ttuz942-m.css';
import '../../css/n/n-kkngb4q.css';
import '../../css/x/xpji35bsj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGsIZDIchK" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="w-q4fxgbt"/><stop offset="1" class="ttuz942-m"/></linearGradient><path fill="url(#SVGsIZDIchK)" class="n-kkngb4q"/><path class="xpji35bsj"/>`,
		"fallback": "selfhst:apple-podcasts",
	});
}

export default Component;

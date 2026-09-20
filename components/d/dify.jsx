import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ytbbvlbou.css';
import '../../css/m/m3gvbdb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ytbbvlbou"/><path class="m3gvbdb1l"/></g>`,
		"fallback": "thesvg:dify",
	});
}

export default Component;

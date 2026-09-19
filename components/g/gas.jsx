import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d2hxufb_c.css';
import '../../css/p/p57t2dkbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="d2hxufb_c"/><path class="p57t2dkbq"/></g>`,
		"fallback": "icon-park-outline:gas",
	});
}

export default Component;

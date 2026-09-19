import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yl3ib2b4t.css';
import '../../css/d/dj__7_bov.css';
import '../../css/h/h7tnjtbgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="yl3ib2b4t"/><path class="dj__7_bov"/><path class="h7tnjtbgk"/></g>`,
		"fallback": "icon-park-outline:home",
	});
}

export default Component;

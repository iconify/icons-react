import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rcxs0t6qt.css';
import '../../css/c/c22h241vp.css';
import '../../css/s/squd7s8xm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="rcxs0t6qt"/><circle class="c22h241vp"/><path class="squd7s8xm"/></g>`,
		"fallback": "icon-park-solid:editing",
	});
}

export default Component;

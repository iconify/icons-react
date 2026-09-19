import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/ctq-00ygq.css';
import '../../css/g/g0flr5bpr.css';
import '../../css/x/xm8fyk4mu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ctq-00ygq"/><circle class="g0flr5bpr"/><path class="xm8fyk4mu"/></g>`,
		"fallback": "icon-park-outline:folder-block",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/y-vh9ab-m.css';
import '../../css/q/qqcxr9mnl.css';
import '../../css/s/squd7s8xm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="y-vh9ab-m"/><circle class="qqcxr9mnl"/><path class="squd7s8xm"/></g>`,
		"fallback": "icon-park-outline:editing",
	});
}

export default Component;

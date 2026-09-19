import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qotkwl1bf.css';
import '../../css/o/omjh3bb_f.css';
import '../../css/c/cnw7n79ym.css';
import '../../css/q/q_9icnb5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="qotkwl1bf"/><path class="omjh3bb_f"/><path class="cnw7n79ym"/><path class="q_9icnb5j"/></g>`,
		"fallback": "icon-park-outline:drink",
	});
}

export default Component;

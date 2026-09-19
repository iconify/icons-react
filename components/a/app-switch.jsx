import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lv-93fbrx.css';
import '../../css/j/jss8cmb6j.css';
import '../../css/e/e5nawumwm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="lv-93fbrx"/><path class="jss8cmb6j"/><path class="e5nawumwm"/></g>`,
		"fallback": "icon-park:app-switch",
	});
}

export default Component;

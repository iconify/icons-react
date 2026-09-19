import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yizjjzobk.css';
import '../../css/u/ugungrqzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="yizjjzobk"/><path class="ugungrqzd"/></g>`,
		"fallback": "icon-park:boy-two",
	});
}

export default Component;

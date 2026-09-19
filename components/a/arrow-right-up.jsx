import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nesnre-rh.css';
import '../../css/d/djzm7cchw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nesnre-rh"/><path class="djzm7cchw"/></g>`,
		"fallback": "icon-park:arrow-right-up",
	});
}

export default Component;

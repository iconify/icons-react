import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p832xibgf.css';
import '../../css/d/d8l6oj8vr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="p832xibgf"/><path class="d8l6oj8vr"/></g>`,
		"fallback": "icon-park:clothes-turtleneck",
	});
}

export default Component;

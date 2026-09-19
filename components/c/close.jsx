import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f05d6acbu.css';
import '../../css/d/d42n7-ixf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="f05d6acbu"/><path class="d42n7-ixf"/></g>`,
		"fallback": "icon-park:close",
	});
}

export default Component;

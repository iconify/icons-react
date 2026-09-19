import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fj9cg3sem.css';
import '../../css/d/dla0quf1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="fj9cg3sem"/><path class="dla0quf1g"/></g>`,
		"fallback": "icon-park:dianziqian",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tw13_eb9q.css';
import '../../css/z/z_0_21r3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tw13_eb9q"/><path class="z_0_21r3m"/></g>`,
		"fallback": "icon-park:coat-hanger",
	});
}

export default Component;

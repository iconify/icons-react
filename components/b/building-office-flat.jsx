import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atlvj1b_e.css';
import '../../css/g/g-otsy8bu.css';
import '../../css/x/xp-y3lg0s.css';
import '../../css/n/nc2azgdgr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="atlvj1b_e"/><path class="g-otsy8bu"/><path clip-rule="evenodd" class="xp-y3lg0s"/><path class="nc2azgdgr"/></g>`,
		"fallback": "streamline-plump-color:building-office-flat",
	});
}

export default Component;

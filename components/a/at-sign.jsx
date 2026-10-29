import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3iqnh3-m.css';
import '../../css/d/div5rtbve.css';
import '../../css/h/humbaqb4e.css';
import '../../css/q/qh7h3nbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k y3iqnh3-m"/><path class="div5rtbve wm-k"/><path class="humbaqb4e wm-k"/><path class="qh7h3nbxd wm-shine"/></g>`,
		"fallback": "withicons-anime:at-sign",
	});
}

export default Component;

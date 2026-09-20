import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/iz_gcabos.css';
import '../../css/c/cwhlfnj4u.css';
import '../../css/n/nvpwl1gza.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="iz_gcabos"/><path class="cwhlfnj4u"/><path class="nvpwl1gza"/></g>`,
		"fallback": "streamline-plump:dashboard-gauge-2",
	});
}

export default Component;

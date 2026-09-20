import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/neav67bxp.css';
import '../../css/p/p997oqn2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="neav67bxp"/><path class="p997oqn2n"/></g>`,
		"fallback": "streamline-plump:give-gift",
	});
}

export default Component;

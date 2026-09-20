import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ytpthob6n.css';
import '../../css/x/xxe3d9b_s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ytpthob6n"/><path class="xxe3d9b_s"/></g>`,
		"fallback": "streamline-plump:battery-low-3",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ytpthob6n.css';
import '../../css/i/i1-x9ubvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ytpthob6n"/><path class="i1-x9ubvc"/></g>`,
		"fallback": "streamline-plump:battery-charging",
	});
}

export default Component;

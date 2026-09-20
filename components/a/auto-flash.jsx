import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qu65g7ffq.css';
import '../../css/r/rr0x43b_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="qu65g7ffq"/><path class="rr0x43b_g"/></g>`,
		"fallback": "streamline-plump-color:auto-flash",
	});
}

export default Component;

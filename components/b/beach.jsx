import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/vyj9x15ve.css';
import '../../css/g/ghtpa-b1r.css';
import '../../css/q/q1dg1vu0c.css';
import '../../css/w/w5wgx-lqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="vyj9x15ve"/><path class="ghtpa-b1r"/><path class="q1dg1vu0c"/><path class="w5wgx-lqd"/></g>`,
		"fallback": "streamline-plump-color:beach",
	});
}

export default Component;

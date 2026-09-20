import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/iumob5e9e.css';
import '../../css/w/wcz3c02rs.css';
import '../../css/d/df4ydac7s.css';
import '../../css/y/y1xu7ibpb.css';
import '../../css/m/mo93ri__q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="iumob5e9e"/><path class="wcz3c02rs"/><path class="df4ydac7s"/><ellipse class="y1xu7ibpb"/><ellipse class="mo93ri__q"/></g>`,
		"fallback": "solar:file-smile-broken",
	});
}

export default Component;

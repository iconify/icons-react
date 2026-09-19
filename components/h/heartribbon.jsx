import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwsggl4nt.css';
import '../../css/w/w2kpx3bru.css';
import '../../css/b/bajemy94v.css';
import '../../css/v/vfdxbdcpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwsggl4nt"/><path class="w2kpx3bru"/><path class="bajemy94v"/><path class="vfdxbdcpq"/>`,
		"fallback": "fxemoji:heartribbon",
	});
}

export default Component;

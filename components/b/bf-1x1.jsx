import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l6ip3yb8b.css';
import '../../css/n/n3oehdbmu.css';
import '../../css/f/f7-rvmbox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l6ip3yb8b"/><path class="n3oehdbmu"/></g><path class="f7-rvmbox"/>`,
		"fallback": "flag:bf-1x1",
	});
}

export default Component;

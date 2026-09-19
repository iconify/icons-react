import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uds0vsguf.css';
import '../../css/d/d4nlxs3wn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="uds0vsguf"/><rect class="d4nlxs3wn"/></g>`,
		"fallback": "icon-park:commuter-bag",
	});
}

export default Component;

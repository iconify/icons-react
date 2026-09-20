import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/h/h0s2ezbxb.css';
import '../../css/p/pqzfv4bgn.css';
import '../../css/u/u2wj6rv4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="h0s2ezbxb"/><path class="pqzfv4bgn"/><path class="u2wj6rv4e"/></g>`,
		"fallback": "streamline-plump:browser-website-1",
	});
}

export default Component;

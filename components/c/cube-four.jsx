import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r437_k3kf.css';
import '../../css/h/h0ept0bti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="r437_k3kf"/><path class="h0ept0bti"/></g>`,
		"fallback": "icon-park-outline:cube-four",
	});
}

export default Component;

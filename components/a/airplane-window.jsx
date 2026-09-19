import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q0j0rac5y.css';
import '../../css/p/pgybz7brd.css';
import '../../css/c/cnwdk_ewy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q0j0rac5y"/><path class="pgybz7brd"/><path class="cnwdk_ewy"/></g>`,
		"fallback": "icon-park-outline:airplane-window",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h68ut6bnw.css';
import '../../css/u/u6f03sbhm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h68ut6bnw"/><path class="u6f03sbhm"/></g>`,
		"fallback": "icon-park-outline:database-network-point",
	});
}

export default Component;

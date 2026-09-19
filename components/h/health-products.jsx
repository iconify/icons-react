import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aldkomftd.css';
import '../../css/y/yn5ovibru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="aldkomftd"/><circle class="yn5ovibru"/></g>`,
		"fallback": "icon-park-outline:health-products",
	});
}

export default Component;

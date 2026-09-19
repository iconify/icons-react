import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/no5i_8bqu.css';
import '../../css/d/dx7nwntkv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="no5i_8bqu"/><path class="dx7nwntkv"/></g>`,
		"fallback": "icon-park-outline:icecream-one",
	});
}

export default Component;

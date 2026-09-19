import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/in5_facbm.css';
import '../../css/r/rbcqgcc7u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="in5_facbm"/><path class="rbcqgcc7u"/></g>`,
		"fallback": "icon-park-outline:external-transmission",
	});
}

export default Component;
